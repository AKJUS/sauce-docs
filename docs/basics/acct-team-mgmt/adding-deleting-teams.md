---
id: adding-deleting-teams
title: Adding and Deleting Teams
sidebar_label: Adding and Deleting Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>
If you are an organization admin, you can create and delete teams and assign concurrency limits to each team.

## Adding Teams

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="400"/>

2. On the **TEAMS** tab, click the blue plus sign.

   <img src={useBaseUrl('img/team-mgmt/add-new-team-nav.jpg')} alt="Add new team"/>

3. In the **Create new team** box, enter a team name and description.

<img src={useBaseUrl('img/team-mgmt/create-new-team.jpg')} alt="Create new team" width="400"/>

4. In the **TO LINE OF BUSINESS** dropdown, select the line of business the team will be associated with.
5. Under **TEAM CONCURRENCY LIMITS**, set the number of concurrent virtual machines that the team can access. For more information about concurrency, see [Managing Concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency).
6. Click **ADD TEAM**.

## Deleting Teams

:::note
Teams that contain service accounts cannot be deleted. Remove all service accounts before attempting to delete the team.<br/><br/>
However, if a team only contains user accounts, you can delete it by selecting a target team to which the users will be reassigned.
:::

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. On the **TEAMS** tab, select the checkbox of the team or teams you want to delete.
3. Next to **TEAMS SELECTED**, in the **Action** dropdown, click **Delete team**.

<img src={useBaseUrl('img/team-mgmt/delete-team.jpg')} alt="Delete team"/>

4. In the **Confirm Delete** box, select the team that you want to transfer the members of the deleted team to. If you don't select a new team, the team members will be moved to the default team.
5. Click **Yes, Remove**.
