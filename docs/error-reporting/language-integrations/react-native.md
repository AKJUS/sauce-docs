---
id: react-native
title: React Native Integration Guide
sidebar_label: React Native
description: Use React Native in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Backtrace](https://backtrace.io) captures and reports handled and unhandled exceptions in your production software so
you can manage application quality through the complete product lifecycle.

The [@backtrace/react-native](#) SDK connects your JavaScript application to Backtrace. The basic integration is quick
and easy, after which you can explore the rich set of Backtrace features.

## Table of Contents

1. [Basic Integration - Reporting your first errors](#basic-integration)
    - [Install the package](#install-the-package)
    - [Integrate the SDK](#integrate-the-sdk)
    - [Upload source maps](#upload-source-maps)
1. [Error Reporting Features](#error-reporting-features)
    - [Attributes](#attributes)
    - [File Attachments](#file-attachments)
    - [Breadcrumbs](#breadcrumbs)
    - [Application Stability Metrics](#application-stability-metrics)
        - [Metrics Configuration](#metrics-configuration)
        - [Metrics Usage](#metrics-usage)
    - [Offline Database support](#offline-database-support)
        - [Database Configuration](#database-configuration)
        - [Native crash support](#native-crash-support)
        - [Manual database operations](#manual-database-operations)
1. [Advanced SDK Features](#advanced-sdk-features)
    - [BacktraceClient Options](#backtraceclient)
    - [Manually send an error](#manually-send-an-error)
    - [Modify/skip error reports](#modifyskip-error-reports)
    - [Automatically upload source maps](#automatically-upload-source-maps)
    - [SDK Method Overrides](#sdk-method-overrides)

## Basic Integration

### Install the package

```
$ npm install @backtrace/react-native
```

On iOS, do not forget about installing cocoa pods

```
$ cd ios
$ pod install
```

### Integrate the SDK

Add the following code to your application before all other scripts to report react-native errors to Backtrace.

```ts
// Import the BacktraceClient from @backtrace/react-native with your favorite package manager.
import { BacktraceClient, BacktraceConfiguration } from '@backtrace/react-native';

// Configure client options
const options: BacktraceConfiguration = {
    // Submission url
    // <universe> is the subdomain of your Backtrace instance (<universe>.backtrace.io)
    // <token> can be found in Project Settings/Submission tokens
    url: 'https://submit.backtrace.io/<universe>/<token>/json',
    database: {
        enable: true,
        captureNativeCrashes: true,
        createDatabaseDirectory: true,
        path: `${BacktraceClient.applicationDataPath}/backtrace`,
    },
};

// Initialize the client with the options
const client = BacktraceClient.initialize(options);

// By default, Backtrace will send an error for Uncaught Exceptions and Unhandled Promise Rejections

// Manually send an error
client.send(new Error('Something broke!'));
```

### Upload source maps

Client-side error reports are based on minified code. Upload source maps and source code to resolve minified code to
your original source identifiers.

[(Source Map feature documentation)](https://docs.saucelabs.com/error-reporting/platform-integrations/source-map/)

## Error Reporting Features

### Attributes

Custom attributes are key-value pairs that can be added to your error reports. They are used in report aggregation,
sorting and filtering, can provide better contextual data for an error, and much more. They are foundational to many of
the advanced Backtrace features detailed in
[Error Reporting documentation](https://docs.saucelabs.com/error-reporting/getting-started/). By default attributes such
as application name and version are populated automatically. If Backtrace cannot find them, you need to provide them
manually via userAttributes attributes.

There are several places where attributes can be added, modified or deleted.

#### Attach attributes object to BacktraceClient

It is possible to include an attributes object during [BacktraceClient](#backtraceclient) initialization. This list of
attributes will be included with every error report, referred to as global attributes.

```ts
// Create an attributes object that can be modified throughout runtime
const attributes: Record<string, unknown> = {
    release: 'PROD',
};

// BacktraceClientOptions
const options: BacktraceConfiguration = {
    url: 'https://submit.backtrace.io/<universe>/<token>/json',

    // Attach the attributes object
    userAttributes: attributes,
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

You can also include attributes that will be resolved when creating a report:

```ts
// BacktraceClientOptions
const options: BacktraceConfiguration = {
    url: 'https://submit.backtrace.io/<universe>/<token>/json',

    // Attach the attributes object
    userAttributes: () => ({
        attribute: getAttributeValue(),
    }),
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

#### Add attributes during application runtime

Global attributes can be set during the runtime once specific data has be loaded (e.g. a user has logged in).

```ts
const client = BacktraceClient.initialize(options);
...

client.addAttribute({
    "clientID": "de6faf4d-d5b5-486c-9789-318f58a14476"
})
```

You can also add attributes that will be resolved when creating a report:

```ts
const client = BacktraceClient.initialize(options);
...

client.addAttribute(() => ({
    "clientID": resolveCurrentClientId()
}))
```

#### Add attributes to an error report

The attributes list of a BacktraceReport object can be directly modified.

```ts
const report: BacktraceReport = new BacktraceReport('My error message', { myReportKey: 'myValue' });
report.attributes['myReportKey'] = 'New value';
```

---

### File Attachments

Files can be attached to error reports. This can be done when initalizing the BacktraceClient, updating the
BacktraceClient, or dynamically for specific reports. When including attachments in BacktraceClient, all files will be
uploaded with each report.

```ts
// Import attachment types from @backtrace/react-native
import { BacktraceStringAttachment, BacktraceUint8ArrayAttachment  } from "@backtrace/react-native";

// BacktraceStringAttachment should be used for text object like a log file, for example
const stringAttachment = new BacktraceStringAttachment("logfile.txt", "This is the start of my log")


// BacktraceClientOptions
const options = {
    url: "https://submit.backtrace.io/<universe>/<token>/json",

    // Attach the files to all reports
    attachments: [stringAttachment],
}

const client = BacktraceClient.initialize(options);

// Later decide to add an attachment to all reports
client.addAttachment(stringAttachment)

// After catching an exception and generating a report
try {
    throw new Error("Caught exception!")
} catch (error) {
    const report = const report = new BacktraceReport(error, {}, [stringAttachment])
    client.send(report);
}
```

---

### Breadcrumbs

Breadcrumbs are snippets of chronological data tracing runtime events. This SDK records a number of events by default,
and manual breadcrumbs can also be added.

[(Breadcrumbs feature documentation)](https://docs.saucelabs.com/error-reporting/web-console/debug/#breadcrumbs)

#### Breadcrumbs Configuration

| Option Name          | Type                                                       | Description                                                                                                                                                   | Default         | Required?                |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| `enable`             | Boolean                                                    | Determines if the breadcrumbs support is enabled. By default the value is set to true.                                                                        | `true`          | <ul><li>- [ ] </li></ul> |
| `logLevel`           | BreadcrumbLogLevel                                         | Specifies which log level severity to include. By default all logs are included.                                                                              | All Logs        | <ul><li>- [ ] </li></ul> |
| `eventType`          | BreadcrumbType                                             | Specifies which breadcrumb type to include. By default all types are included.                                                                                | All Types       | <ul><li>- [ ] </li></ul> |
| `maximumBreadcrumbs` | Number                                                     | Specifies maximum number of breadcrumbs stored by the library. By default, only 100 breadcrumbs will be stored.                                               | `100`           | <ul><li>- [ ] </li></ul> |
| `intercept`          | (breadcrumb: RawBreadcrumb) => RawBreadcrumb \| undefined; | Inspects breadcrumb and allows to modify it. If the undefined value is being returned from the method, no breadcrumb will be added to the breadcrumb storage. | All Breadcrumbs | <ul><li>- [ ] </li></ul> |

```ts
import { BacktraceClient, BacktraceConfiguration } from '@backtrace/react-native';

// BacktraceClientOptions
const options: BacktraceConfiguration = {
    // ignoring all but breadcrumbs config for simplicity
    breadcrumbs: {
        // breadcrumbs configuration
    },
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

#### Default Breadcrumbs

| Type    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| Console | Adds a breadcrumb every time console log is being used by the developer. |

#### Intercepting Breadcrumbs

If PII or other information needs to be filtered from a breadcrumb, you can use the intercept function to skip or filter
out the sensitive information. Any RawBreadcrumb returned will be used for the breadcrumb. If undefined is returned, no
breadcrumb will be added.

#### Manual Breadcrumbs

In addition to all of the default breadcrumbs that are automatically collected, you can also manually add breadcrumbs of
your own.

```ts
client.breadcrumbs?.info('This is a manual breadcrumb.', {
    customAttr: 'wow!',
});
```

---

### Application Stability Metrics

The Backtrace react-native SDK has the ability to send usage Metrics to be viewable in the Backtrace UI.

[(Stability Metrics feature documentation)](https://docs.saucelabs.com/error-reporting/project-setup/stability-metrics/)

#### Metrics Configuration

| Option Name            | Type    | Description                                                                                                                                                                                                                                                                                                                                              | Default                       | Required?                |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------ |
| `metricsSubmissionUrl` | String  | Metrics server hostname. By default the value is set to https://events.backtrace.io.                                                                                                                                                                                                                                                                     | `https://events.backtrace.io` | <ul><li>- [ ] </li></ul> |
| `enable`               | Boolean | Determines if the metrics support is enabled. By default the value is set to true.                                                                                                                                                                                                                                                                       | `true`                        | <ul><li>- [ ] </li></ul> |
| `autoSendInterval`     | Number  | Indicates how often crash free metrics are sent to Backtrace. The interval is a value in ms. By default, session events are sent on application startup/finish, and every 30 minutes while the application is running. If the value is set to 0. The auto send mode is disabled. In this situation the application needs to maintain send mode manually. | On application startup/finish | <ul><li>- [ ] </li></ul> |
| `size`                 | Number  | Indicates how many events the metrics storage can store before auto submission.                                                                                                                                                                                                                                                                          | `50`                          | <ul><li>- [ ] </li></ul> |

#### Metrics Usage

```ts
// metrics will be undefined if not enabled
client.metrics?.send();
```

---

### Offline database support

The Backtrace react-native SDK can cache generated reports and crashes to local disk before sending them to Backtrace.
This is recommended; in certain configurations react-native applications can crash before the SDK finishes submitting
data, and under slow internet conditions your application might wait in a closing window until the HTTP submission
finishes. In such an event cached reports will be sent on next application launch.

With offline database support you can:

-   cache your reports when the user doesn't have an internet connection or the service is unavailable,
-   capture crashes,
-   manually decide whether or not to send reports, and when.

Offline database support is disabled by default. To enable it, please add "enable: true" and the path to the directory
where Backtrace can store crash data.

```ts
const client = BacktraceClient.initialize({
    // ignoring all but database config for simplicity
    database: {
        enable: true,
        path: `${BacktraceClient.applicationDataPath}/path/to/dir`,
        captureNativeCrashes: true,
    },
});

// manually send and keep the data on connection issue
client.database.send();
// manually send and remove all data no matter if received success or not.
client.database.flush();
```

Backtrace client exposes a method `applicationDataPath` that can help you create the path to your database directory.

The helper returns:

-   Android: Path to the files directory available in the application context,
-   iOS: Path to the application cache directory

#### Database Configuration

| Option Name               | Type    | Description                                                                                                                                                                  | Default | Required?                |
| ------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------ |
| `enabled`                 | Boolean | Enable/disable offline database support.                                                                                                                                     | false   | <ul><li>- [x] </li></ul> |
| `path`                    | String  | Local storage path for crash data.                                                                                                                                           | -       | <ul><li>- [x] </li></ul> |
| `createDatabaseDirectory` | Boolean | Allow the SDK to create the offline database directory.                                                                                                                      | true    |
| `autoSend`                | Boolean | Sends reports to the server based on the retry settings. If the value is set to 'false', you can use the Flush or Send methods as an alternative.                            | true    |
| `maximumNumberOfRecords`  | Number  | The maximum number of reports stored in the offline database. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set. | 8       |
| `retryInterval`           | Number  | The amount of time (in ms) to wait between retries if the database is unable to send a report.                                                                               | 60 000  |
| `maximumRetries`          | Number  | The maximum number of retries to attempt if the database is unable to send a report.                                                                                         | 3       |
| `captureNativeCrashes`    | Boolean | Capture and symbolicate stack traces for native crashes if the runtime supports this. A crash report is generated, stored locally, and uploaded upon next start.             | false   |

#### Native crash support

The Backtrace React-Native SDK can capture crashes generated in the native layer. Those crashes cannot be captured on
the JavaScript side by using any kind of helpers. In order to collect them, the SDK uses native crash reporting
solutions available in the package.

Attributes and file attachments will be uploaded by native crash reporting solution. Some important details:

-   Dynamic attributes will not be added.
-   In-memory attachments such as string attachments, are not supported.
-   You cannot apply any managed layer (JavaScript) callbacks to filter or modify crashes before send.
-   Java exceptions and iOS crashes will be available after the application restart. All crashes and reports send after
    application restart are stored in the database directory.
-   On Android, all native crashes from the NDK layer will be sent in the same application session (from a separate
    application process).

#### Manual database operations

Database support is available in the client options with the BacktraceDatabase object. You can use it to manually
operate on database records.

## Advanced SDK Features

### BacktraceClient

BacktraceClient is the main SDK class. Error monitoring starts when this singleton object is instantiated, and it will
compose and send reports for unhandled errors and unhandled promise rejections. It can also be used to manually send
reports from exceptions and rejection handlers. Do not create more than one instance of this object.

#### BacktraceClientOptions

The following options are available for the BacktraceClientOptions passed when initializing the BacktraceClient.

| Option Name                         | Type                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                        | Default | Required?                |
| ----------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------------------------ |
| `url`                               | String                                              | Submission URL to send errors to                                                                                                                                                                                                                                                                                                                                                                                   |         | <ul><li>- [x] </li></ul> |
| `token`                             | String                                              | The submission token for error injestion. This is required only if submitting directly to a Backtrace URL. (uncommon)                                                                                                                                                                                                                                                                                              |         | <ul><li>- [ ] </li></ul> |
| `userAttributes`                    | Dictionary                                          | Additional attributes that can be filtered and aggregated against in the Backtrace UI.                                                                                                                                                                                                                                                                                                                             |         | <ul><li>- [ ] </li></ul> |
| `attachments`                       | BacktraceAttachment[]                               | Additional files to be sent with error reports. See [File Attachments](#file-attachments)                                                                                                                                                                                                                                                                                                                          |         | <ul><li>- [ ] </li></ul> |
| `beforeSend`                        | (data: BacktraceData) => BacktraceData \| undefined | Triggers an event every time an exception in the managed environment occurs, which allows you to skip the report (by returning a null value) or to modify data that library collected before sending the report. You can use the BeforeSend event to extend attributes or JSON object data based on data the application has at the time of exception. See [Modify/skip error reports](#modifyskip-error-reports)) |         | <ul><li>- [ ] </li></ul> |
| `skipReport`                        | (report: BacktraceReport) => boolean                | If you want to ignore specific types of error reports, we recommend that you use the skipReport callback. By using it, based on the data generated in the report, you can decide to filter the report, or send it to Backtrace.                                                                                                                                                                                    |         | <ul><li>- [ ] </li></ul> |
| `captureUnhandledErrors`            | Boolean                                             | Enable unhandled errors                                                                                                                                                                                                                                                                                                                                                                                            | `true`  | <ul><li>- [ ] </li></ul> |
| `captureUnhandledPromiseRejections` | Boolean                                             | Enable unhandled promise rejection                                                                                                                                                                                                                                                                                                                                                                                 | `true`  | <ul><li>- [ ] </li></ul> |
| `timeout`                           | Integer                                             | How long to wait in ms before timing out the connection                                                                                                                                                                                                                                                                                                                                                            | `15000` | <ul><li>- [ ] </li></ul> |
| `ignoreSslCertificate`              | Boolean                                             | Ignore SSL Certificate errors                                                                                                                                                                                                                                                                                                                                                                                      | `false` | <ul><li>- [ ] </li></ul> |
| `rateLimit`                         | Integer                                             | Limits the number of reports the client will send per minute. If set to '0', there is no limit. If set to a value greater than '0' and the value is reached, the client will not send any reports until the next minute.                                                                                                                                                                                           | `0`     | <ul><li>- [ ] </li></ul> |
| `metrics`                           | BacktraceMetricsOptions                             | See [Backtrace Stability Metrics](#application-stability-metrics)                                                                                                                                                                                                                                                                                                                                                  |         | <ul><li>- [ ] </li></ul> |
| `breadcrumbs`                       | BacktraceBreadcrumbsSettings                        | See [Backtrace Breadcrumbs](#breadcrumbs)                                                                                                                                                                                                                                                                                                                                                                          |         | <ul><li>- [ ] </li></ul> |
| `database`                          | BacktraceDatabaseSettings                           | See [Backtrace Database](#offline-database-support)                                                                                                                                                                                                                                                                                                                                                                |         | <ul><li>- [ ] </li></ul> |

### Manually send an error

There are several ways to send an error to Backtrace. For more details on the
definition of `client.send()` see methods below.

```ts
// send as a string
await client.send('This is a string!');

// send as an Error
await client.send(new Error('This is an Error!'));

// as a BacktraceReport (string)
await client.send(new BacktraceReport('This is a report with a string!'));

// as a BacktraceReport (Error)
await client.send(new BacktraceReport(new Error('This is a report with a string!')));
```

### Modify/skip error reports

A BeforeSend event is triggered when an exception in the managed environment occurs to which you can attach a handler.
You can use the BeforeSend event to scrub PII, or extend attributes or JSON object data based on data your application
has at the time of exception. A report can be skipped sompletely by returning a null value.

```ts
const client = BacktraceClient.initialize({
    url: SUBMISSION_URL,
    beforeSend: (data: BacktraceData) => {
        // skip the report by returning a null from the callback
        if (!shouldSendReportToBacktrace(data)) {
            return undefined;
        }
        // apply custom attribute
        data.attributes['new-attribute"] = 'apply-data-in-callback';
        return data;
    },
});
```

### Automatically upload source maps

@Backtrace/react provides CI tooling to easily post source maps to Backtrace. Posting source maps enables Backtrace to symbolicate minified code, allowing error reports to be displayed with the original source code highlighting the correct faulting line.

To integrate an application source maps in react-native with Backtrace you need:
- create a `.backtracejsrc` file in the main application folder,
- install the `@backtrace/javascript-cli` and `@backtrace/sourcemap-tools` packages,
- modify `metro.config.js` to attach debug identifier to the generated javascript code,
- modify the build system in the android or xcode project.

#### Modifying `metro.config.js` 

Backtrace is compatible with the metro build system. To enable source map support, set a `customSerializer` method in the `metro.config.js` file to the `processSourceMap` function available in `@backtrace/react-native/scripts/processSourceMap`.

```
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const backtraceSourceMapProcessor = require('@backtrace/react-native/scripts/processSourceMap');

const config = {
    serializer: {
        customSerializer: backtraceSourceMapProcessor.processSourceMap
    },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);

```

Add Backtrace to build automation to ensure every build has source map support.

In order to upload source maps to Backtrace, you can:

**On Android:**

Enable source map support in `app/build.gradle` by uncommenting hermes source map flags. With additional parameters, source maps will be generated. To automatically upload them to Backtrace, you can use the gradle task available the @backtrace/react-native library.

`apply from: "$rootDir/../node_modules/@backtrace/react-native/android/upload-sourcemaps.gradle"`

Once you import the gradle task, you can simply add it to your flow for any build/assemble tasks.

```gradle
tasks.matching {
    it.name.startsWith("assemble") || it.name.startsWith("build")
}.configureEach { task ->
     task.finalizedBy("uploadSourceMapsToBacktrace")
}
```

**On iOS.**

Modify the code in the `Bundle React Native code and images` step in the `Build Phases` of your xcode project setting. In the end of the script, you can include the code below, to upload source maps directly to Backtrace after generating the applicaiton.

```bash
project_directory="$(pwd)/.."
# enable source map support
export SOURCEMAP_FILE="$project_directory/main.jsbundle.map"

...

# upload source maps to Backtrace
source_map_upload="$project_directory/node_modules/@backtrace/react-native/scripts/ios-sourcemap-upload.sh"
backtrace_js_config="$project_directory/.backtracejsrc"

/bin/sh -c "$source_map_upload $SOURCEMAP_FILE $TARGET_BUILD_DIR/.backtrace-sourcemap-id $backtrace_js_config $project_directory"

```

#### Advanced use cases

Backtrace generates `.backtrace-sourcemap-id` in the application build directory. The file contains debug-id attached to each source file and source file. The debug id file path can be modified by setting an environment variable `DEBUG_ID_PATH` to the path to the file. For example:

```
DEBUG_ID_PATH=/path/to/backtrace/debug/id/backtrace-javascript/.debug_id
```
The file directory should be created before building the application. 

### SDK Method Overrides

BacktraceClient.builder is used to override default BacktraceClient methods. File and http operation overrides, for
example, can be used to implement custom encryption for data at rest or in motion.

> Do not use these operations to modify the data objects. See [Modify/skip error reports](#modifyskip-error-reports) for
> the correct method to modify a report before sending it to Backtrace.

```ts
const client = BacktraceClient.builder(options)
    .useRequestHandler(requestHandler)
    .useBreadcrumbSubscriber(breadcrumbSubscriber)
    .addAttributeProvider(attributeProvider)
    .build();
```
