"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[55906],{87726:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(74848),r=a(28453);a(11470),a(19365),a(86025);const s={id:"ptrace",title:"Plugins for ptrace",sidebar_label:"Plugins for ptrace",description:"pmodules allow users to augment snapshots by performing custom analysis and data structure pretty printing in response to specific events."},l=void 0,i={id:"error-reporting/advanced/ptrace",title:"Plugins for ptrace",description:"pmodules allow users to augment snapshots by performing custom analysis and data structure pretty printing in response to specific events.",source:"@site/docs/error-reporting/advanced/ptrace.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/ptrace",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/ptrace",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/ptrace.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1689158059e3,frontMatter:{id:"ptrace",title:"Plugins for ptrace",sidebar_label:"Plugins for ptrace",description:"pmodules allow users to augment snapshots by performing custom analysis and data structure pretty printing in response to specific events."},sidebar:"backtrace",previous:{title:"Morgue",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/morgue"},next:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/hydra/setup"}},o={},c=[];function d(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pmodules"})," allow users to enhance snapshots by performing custom analysis and pretty printing of data structures in response to specific events."]}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we write a basic ",(0,t.jsx)(n.code,{children:"pmodule"})," using the Lua API. The C API is similar; for that, you can refer to the documentation provided in ",(0,t.jsx)(n.code,{children:"/opt/backtrace/include/ptrace/pmodule.h"})," from the ",(0,t.jsx)(n.code,{children:"backtrace-ptrace-modules"})," package. For a full reference of the Lua API, you can see the Pmodule API page. The example module written here is reproduced in full at the top of the Pmodule API page."]}),"\n",(0,t.jsx)(n.p,{children:"From a pmodule's perspective, a snapshot is generated during two phases: attach and postattach. We are in the attach phase when the ptrace tracer is attached to the target process, during which threads, frames, and variables are extracted. We are in the postattach phase after the ptrace tracer detaches from the process, at which point we have a fully populated backtrace object."}),"\n",(0,t.jsx)(n.p,{children:"A pmodule can react to any of these events by registering a callback. The possible events are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"variable"}),": A new variable has been extracted (while attached to the process)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"frame"}),": A new frame has been extracted (while attached)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"thread"}),": A new thread has been extracted (while attached)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"preattach"}),": Before ptrace attaches to the process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"postattach"}),": After ptrace detaches from the process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attach"}),": Right after attachment, before extraction."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each callback receives relevant objects as arguments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"variable"}),": A pmodule variable object and the underlying bt variable object. BT variables are discussed below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"frame"}),": A frame object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"thread"}),": A thread object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"preattach"}),": A backtrace object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"postattach"}),": A backtrace object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attach"}),": A backtrace object."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, you might want to pretty print a specific data structure if it appears in your snapshot. In that case, you can register a variable event callback with a filter specifying the type of variable you're interested in (filters are covered in more detail below)."}),"\n",(0,t.jsx)(n.p,{children:"These event callbacks typically perform analysis or additional data extraction/formatting and augment the snapshot with additional classifiers, annotations, and more."}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have a better understanding of a pmodule's event-driven design, let's start defining our module. At the global (chunk) scope, call ",(0,t.jsx)(n.code,{children:"pmodule.define"})," like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- The following functions are stubs; we\'ll define a real load function later.\npmodule.define{\n    id = "pmodule_lua",\n    load = function () pmodule.log(pmodule.log_level.warning, "pm_load") end,\n    unload = function () pmodule.log(pmodule.log_level.warning, "pm_unload") end\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"id"})," and ",(0,t.jsx)(n.code,{children:"load"})," are required fields, while ",(0,t.jsx)(n.code,{children:"unload"})," is optional. They are used as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),": A string identifying your module."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"load"}),": A function called to register all event callbacks, executed before the trace begins."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"unload"}),": A function called before ptrace exits to perform any cleanup required by the module."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"pmodule.define"})," is called, it registers the module with the pmodule subsystem. Following this, the registered ",(0,t.jsx)(n.code,{children:"load"})," function is invoked to establish event handlers as specified. Let's examine an example ",(0,t.jsx)(n.code,{children:"load"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'function pm_load()\n    pmodule.register(pmodule.event.postattach, postattach_cb)\n\n    local m = pmodule.match()\n\n    m:add_object("crash")\n    m:add_file("crash.c")\n    m:add_frame_symbol("recurse", pmodule.match_type.substr)\n    m:add_variable_base_type("crash_", pmodule.match_type.substr)\n    m:add_variable_ptrace_type(pmodule.variable_type.tuple)\n\n    pmodule.register(pmodule.event.variable,\n        function(var)\n            var:annotate(pmodule.annotation.critical, "lua: struct var")\n        end, m)\n\n    m:reset()\n    m:set_fault()\n    pmodule.register(pmodule.event.frame, frame_cb, m)\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we are interested in three types of events: the ",(0,t.jsx)(n.code,{children:"postattach"})," event, ",(0,t.jsx)(n.code,{children:"variable"})," extraction events, and ",(0,t.jsx)(n.code,{children:"frame"})," events. We'll cover examples of what we can do in each of these events, but for now, let's focus on the match filters, starting with the one used for the variable event callback."]}),"\n",(0,t.jsxs)(n.p,{children:["All of the object event callbacks (",(0,t.jsx)(n.code,{children:"variable"}),", ",(0,t.jsx)(n.code,{children:"frame"}),", and ",(0,t.jsx)(n.code,{children:"thread"}),") can be filtered by a match object. In this case, we specify that we are interested in a variable extracted from the object file ",(0,t.jsx)(n.code,{children:"crash"}),", the compilation unit ",(0,t.jsx)(n.code,{children:"crash.c"}),", whose frame's symbol contains ",(0,t.jsx)(n.code,{children:"recurse"}),", whose base type contains ",(0,t.jsx)(n.code,{children:"crash_"}),", and whose variable type is a tuple (that is, a struct). Since we want to perform a simple action with this variable (annotate it with a useless message), we register the event with an anonymous function and this match filter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local m = pmodule.match()\n\nm:add_object("crash")\nm:add_file("crash.c")\nm:add_frame_symbol("recurse", pmodule.match_type.substr)\nm:add_variable_base_type("crash_", pmodule.match_type.substr)\nm:add_variable_ptrace_type(pmodule.variable_type.tuple)\n\npmodule.register(pmodule.event.variable,\n    function(var)\n        var:annotate(pmodule.annotation.critical, "lua: struct var")\n    end, m)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, let's look at the frame event registration. Here, we are interested in faulting frames, so we reset the match object (or you can use a different one), set it to match faulted objects, and then register the event using it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"m:reset()\nm:set_fault()\npmodule.register(pmodule.event.frame, frame_cb, m)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"postattach"})," event registration call is straightforward, but we'll delve deeper into that callback later."]}),"\n",(0,t.jsxs)(n.p,{children:["Now that we register all our callbacks, our module is ready to start handling events. ",(0,t.jsx)(n.code,{children:"ptrace"})," executes its registered callbacks, assuming any specified match filters pass. Let's look at what we want to do when a faulted frame is extracted:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local function frame_cb(fr)\n    for v, i in fr:fprm() do\n        v:annotate(pmodule.annotation.critical, "lua: fprm %d", i)\n    end\n\n    local signal = fr:siginfo()\n    if signal then\n        fr:backtrace():annotate(\n            pmodule.annotation.json,\n            \'{"json": {"context": "Signal", \\\n            "Reason": "%s", \\\n            "Populated": "%s", \\\n            "Address": "%x", \\\n            "Num": "%d", \\\n            "Code": "%d", \\\n            "String": "%s"}}\',\n            signal:reason(),\n            tostring(signal:address_populated()),\n            signal:address(),\n            signal:num(),\n            signal:code(),\n            tostring(signal))\n    end\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The example is simple: First, we annotate all parameters of the faulting frame (for illustrative purposes only; hydra indicates all frame parameters by surrounding them with ",(0,t.jsx)(n.code,{children:"( )"}),"). For many objects (which are discussed later), ",(0,t.jsx)(n.code,{children:"pmodules"})," support Lua's generic ",(0,t.jsx)(n.code,{children:"for"})," interface. Here, we iterate over the frame's parameters, which gives us a variable object and a parameter index for each iteration."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"All four main objects (variables, frames, threads, and the overarching backtrace) can be annotated."})}),"\n",(0,t.jsxs)(n.p,{children:["Next, we want to pretty print signal information (again, just an example; hydra already has this pretty-printed under the faulting frame). We are annotating the backtrace object here, so the pretty-printed data is displayed in hydra's Process pane. We are using the ",(0,t.jsx)(n.code,{children:"json"})," annotation type for this. Refer to the Pmodule API documentation for more details on the expected format."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's move on to the ",(0,t.jsx)(n.code,{children:"postattach"})," callback:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local function postattach_cb(bt)\n    local m = pmodule.match()\n    m:set_fault()\n\n    -- Example iterators.\n    for thr in bt, m do\n        for fr in thr do\n            for var in fr do\n                if var:type() == pmodule.variable_type.reference then\n                    local addr = var:value()\n\n                    var:annotate(pmodule.annotation.critical,\n                        "[%x] %s - example annotation",\n                        var:value(), var:name())\n                end\n            end\n        end\n    end\n\n    -- Example global variable iteration.\n    pmodule.log(pmodule.log_level.warning, "Global variables:")\n    for var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do\n        pmodule.log(pmodule.log_level.warning,\n            "name: %s, value: %s, object: %s, cu: %s",\n            var:name(), tostring(var:value()), object, cu)\n    end\n\n    -- Example TLS variable iteration.\n    for thr in bt do\n        pmodule.log(pmodule.log_level.warning, "TLS variables:")\n\n        for var, object, cu in thr:variables(), {cu = "hang"} do\n            pmodule.log(pmodule.log_level.warning,\n                "name: %s, value: %s, object: %s, \\\n                cu: %s",\n                var:name(), tostring(var:value()), object, cu)\n        end\n    end\n\n    -- Example global variable lookup by name.\n    for var in bt:variables(), {name = "global_version"} do\n        local str = pmodule.address_read_string(var:value(), 256)\n\n        pmodule.log(pmodule.log_level.warning,\n            "[%x] string: %s", var:value(), str)\n    end\n\n    pmodule.log(pmodule.log_level.warning, "process state: %d",\n        bt:process_state())\n\n    bt:add_kv_int("lua_key1", 42)\n    bt:add_kv_string("lua_key2", "lua_value")\n    bt:add_classifier("lua")\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we start with iteration. The backtrace object, threads, and frames can be iterated over using Lua's generic ",(0,t.jsx)(n.code,{children:"for"})," interface. Each of these iterators accepts an optional match object via the invariant state (the second expression in the ",(0,t.jsx)(n.code,{children:"for"})," loop's expression list). In the first iterator, we iterate over all faulting threads."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local m = pmodule.match()\nm:set_fault()\n\n-- Example iterators.\nfor thr in bt, m do\n    for fr in thr do\n        for var in fr do\n            if var:type() == pmodule.variable_type.reference then\n                local addr = var:value()\n\n                var:annotate(pmodule.annotation.critical, "[%x] %s - example annotation", var:value(), var:name())\n            end\n        end\n    end\nend\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The full backtrace is populated only in the ",(0,t.jsx)(n.code,{children:"postattach"})," callback (which is why we perform the full iteration example there). In the thread callback, you are guaranteed the full thread is populated (with its frames and variables). In the frame callback, you are guaranteed the full frame is populated (with its variables)."]})}),"\n",(0,t.jsx)(n.p,{children:"Next, we'll cover global and TLS variable iteration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- Example global variable iteration.\npmodule.log(pmodule.log_level.warning, "Global variables:")\nfor var, object, cu in bt:variables(), {object = "crash", cu = "invalid_write.c"} do\n    pmodule.log(\n        pmodule.log_level.warning,\n        "name: %s, value: %s, object: %s, cu: %s",\n        var:name(),\n        tostring(var:value()),\n        object,\n        cu\n    )\nend\n\n-- Example TLS variable iteration.\nfor thr in bt do\n    pmodule.log(pmodule.log_level.warning, "TLS variables:")\n\n    for var, object, cu in thr:variables(), {cu = "hang"} do\n        pmodule.log(\n            pmodule.log_level.warning,\n            "name: %s, value: %s, object: %s, \\z\n                cu: %s",\n            var:name(),\n            tostring(var:value()),\n            object,\n            cu\n        )\n    end\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["These iterations use the same generic ",(0,t.jsx)(n.code,{children:"for"})," interface mentioned earlier for threads, frames, and other entities. The filter (invariant state) here is a table instead of a match object. The supported fields are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"object"}),": The desired object file (substring match)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cu"}),": The desired compilation unit (substring match)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": The variable's name (exact match)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All of these fields (and the filter table itself) are optional. Each iteration returns a variable object, the object filename, and the compilation unit name."}),"\n",(0,t.jsx)(n.p,{children:"Suppose we're interested in a particular global variable - a variable containing the version of our program:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- Example global variable lookup by name.\nfor var in bt:variables(), {name = "global_version"} do\n    local str = pmodule.address_read_string(var:value(), 256)\n\n    pmodule.log(pmodule.log_level.warning,\n        "[%x] string: %s", var:value(), str)\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To find it, we use the global variable iterator with a name filter. It's a C-string variable (that is, a pointer), so we use the global read API ",(0,t.jsx)(n.code,{children:"pmodule.address_read_string"})," to read the string."]}),"\n",(0,t.jsx)(n.p,{children:"Suppose we've noticed something interesting (perhaps application-specific) about the data in our snapshot, and we want to classify the snapshot based on this. Your pmodule can use the following API for that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- `bt` is a backtrace object.\nbt:add_kv_int("lua_key1", 42)\nbt:add_kv_string("lua_key2", "lua_value")\nbt:add_classifier("lua")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Previously, we mentioned ",(0,t.jsx)(n.code,{children:"bt_variables"}),". Pmodules can use them to access specific fields in structures and iterate over arrays, linked lists, and other data structures."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bt_variables"})," themselves only allow access to member fields, which return new ",(0,t.jsx)(n.code,{children:"bt_variables"}),"; to extract actual data from them, they must first be synthesized into pmodule variables."]})}),"\n",(0,t.jsx)(n.p,{children:"Here's a full example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'--[[\n\n-- Assume we have these definitions:\n\nstruct nested {\n    int c;\n};\n\nstruct linkedstruct {\n    STAILQ_ENTRY(linkedstruct) linkage;\n    int v;\n};\n\nstruct somestruct {\n    int a;\n    double b;\n    struct nested n;\n    struct nested *np;\n    struct nested **npp;\n    struct nested ***nppp;\n    STAILQ_HEAD(, linkedstruct) list;\n    const char *s;\n};\n\nstruct array_struct {\n    struct somestruct *kids;\n    int len;\n};\n\n-- And these global variables:\n\nstatic struct somestruct *some_struct_g;\nstatic struct array_struct papa;\n\n-- And the following population code:\n\npapa.kids = calloc(10, sizeof(struct somestruct));\nif (papa.kids == NULL) {\n    fprintf(stderr, "allocation failure");\n    exit(EXIT_FAILURE);\n}\npapa.len = 10;\n\nsome_struct_g = calloc(1, sizeof *some_struct_g);\nif (some_struct_g == NULL) {\n    fprintf(stderr, "allocation failure");\n    exit(EXIT_FAILURE);\n}\n\nSTAILQ_INIT(&some_struct_g->list);\nfor (z = 0; z < 10; ++z) {\n    struct linkedstruct *l;\n\n    l = calloc(1, sizeof *l);\n    if (l == NULL) {\n        fprintf(stderr, "allocation failure");\n        exit(EXIT_FAILURE);\n    }\n\n    l->v = z;\n\n    STAILQ_INSERT_TAIL(&some_struct_g->list, l, linkage);\n}\n\nsome_struct_g->a = 4;\nsome_struct_g->b = 5;\nsome_struct_g->n.c = 6;\nsome_struct_g->np = &some_struct_g->n;\nsome_struct_g->npp = &some_struct_g->np;\nsome_struct_g->nppp = &some_struct_g->npp;\nsome_struct_g->s = "kids";\nfor (z = 0; z < 10; ++z) {\n    papa.kids[z].a = 9 + z;\n    papa.kids[z].b = 9 + z;\n    papa.kids[z].n.c = 9 + z;\n    papa.kids[z].np = &papa.kids[z].n;\n    papa.kids[z].npp = &papa.kids[z].np;\n    papa.kids[z].nppp = &papa.kids[z].npp;\n    papa.kids[z].s = "papa";\n}\n\n]] --\n\nlocal function attach_cb(bt)\n    -- Note: this is a global (Lua) variable.\n    -- cached_ref_var will be nil if this fails. variable_cb will\n    -- attempt to use this, resulting in an exception if nil.\n    cached_ref_var = pmodule.bt_query("some_struct_g", "crash", "crash.c")\n\n    local n = cached_ref_var.list.stqh_first\n    local v = pmodule.variable_from_bt(n)\n\n    while v:value() ~= 0 do\n        local val = pmodule.variable_from_bt(n.v)\n        print(string.format("[%x] %s: %d", val:address(), val:name(), val:value()))\n        n = n.linkage.stqe_next\n        v = pmodule.variable_from_bt(n)\n    end\nend\n\nlocal function variable_cb(var, raw)\n    -- Variables synthesized this way will be finalized/freed. They cannot\n    -- be added to the snapshot. All synthesized variables must go through\n    -- the synthesis API.\n    -- This is enforced through the API.\n    local n = pmodule.variable_from_bt(raw.len):value()\n    local addr = pmodule.variable_from_bt(raw.kids):value()\n\n    -- We\'ll use size to iterate over the array.\n    local size = pmodule.sizeof(pmodule.deref(cached_ref_var))\n\n    print(string.format("addr: %x, len: %d, size: %d", addr, n, size))\n\n    for i = 0, n - 1 do\n        local na = addr + i * size\n\n        print(string.format("--- iter %d (%x)---", i, na))\n\n        elem = pmodule.deref(cached_ref_var, addr + i * size)\n\n        print(string.format("a: %d", pmodule.variable_from_bt(elem.a):value()))\n        print(string.format("b: %f", pmodule.variable_from_bt(elem.b):value()))\n\n        -- Note: when accessing member fields, pointers are\n        -- automatically dereferenced until we reach the underlying\n        -- struct.\n        print(string.format("nppp.c: %d", pmodule.variable_from_bt(elem.nppp.c):value()))\n    end\nend\n\nlocal function pm_load()\n    local m = pmodule.match()\n\n    m:add_object("crash")\n    m:add_file("crash.c")\n    m:add_variable_base_type("array_struct", pmodule.match_type.substr)\n    m:add_variable_ptrace_type(pmodule.variable_type.tuple)\n    m:add_variable_name("papa", pmodule.match_type.substr)\n\n    pmodule.register(pmodule.event.variable, variable_cb, m)\n    pmodule.register(pmodule.event.attach, attach_cb)\nend\n\npmodule.define {\n    id = "array_iter",\n    load = pm_load\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"A few CLI options exist to keep in mind when using pmodules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sandbox whitelist"}),": Allows certain Lua features to be used by Lua modules (disabled by default for better default security)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"module-load/modules-path"}),": Loads modules from a specific file or directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"module"}),": Passes key-value arguments to modules (modules are identified by their id name)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, consult the ",(0,t.jsx)(n.code,{children:"ptrace -h"})," output."]}),"\n",(0,t.jsx)(n.p,{children:"That concludes this tutorial. We've covered how to register your pmodule with ptrace, how to register callbacks for events that interest you, how to iterate over various snapshot objects, and some of what you can do with individual objects. Of course, there's more you can do in a pmodule. For a full reference, consult the pmodule API documentation."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),r=a(18215),s=a(23104),l=a(56347),i=a(205),o=a(57485),c=a(31682),d=a(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),r=i[a].value;r!==t&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(_,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);