module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/mdx.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllMdx",
    ()=>getAllMdx,
    "getMdx",
    ()=>getMdx,
    "postsPath",
    ()=>postsPath
]);
// lib/mdx.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$gray$2d$matter$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs, [project]/node_modules/gray-matter)");
;
;
;
const root = process.cwd();
const postsPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(root, "posts");
const getMdx = (fileName)=>{
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsPath, fileName);
    const docSource = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, "utf-8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$gray$2d$matter$29$__["default"])(docSource);
    return {
        frontMatter: {
            ...data,
            slug: fileName.replace(".mdx", "")
        },
        content
    };
};
const getAllMdx = ()=>{
    const items = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsPath).filter((item)=>item.endsWith(".mdx")).map((item)=>getMdx(item));
    // Sort by id (the guide's reading order). Dates are shared between many
    // posts, so sorting by date alone gave an unstable order.
    return items.sort((a, b)=>{
        const idA = a.frontMatter.id || 0;
        const idB = b.frontMatter.id || 0;
        if (idA !== idB) return idA - idB;
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
};
}),
"[project]/lib/formatDate.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
// lib/formatDate.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/parseISO/index.js [ssr] (ecmascript) <export default as parseISO>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$format$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__format$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/format/index.js [ssr] (ecmascript) <export default as format>");
;
const formatDate = (date)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$format$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__format$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$parseISO$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__parseISO$3e$__["parseISO"])(date), "MMMM dd, yyyy");
};
}),
"[project]/components/Prose.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Prose.tsx
__turbopack_context__.s([
    "Prose",
    ()=>Prose
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const Prose = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-none prose dark:prose-invert",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Prose.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/Page.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Page",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// components/Page.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatDate.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Prose.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, cjs, [project]/node_modules/clsx) <export default as cx>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const Page = ({ date, title, description, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("mt-12 mb-8 pb-8 border-b", "border-gray-300", "dark:border-gray-700"),
                children: [
                    date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("time", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("block mb-2", "text-gray-500", "dark:text-gray-400"),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(date)
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold",
                        style: {
                            fontFamily: "Syne Mono, monospace"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                            children: typeof description === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/Page.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : description
                        }, void 0, false, {
                            fileName: "[project]/components/Page.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/Page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Note.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Note",
    ()=>Note
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// components/Note.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, cjs, [project]/node_modules/clsx) <export default as cx>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Prose.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Note = ({ emoji, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("p-4 flex gap-4 border rounded-md", "bg-gray-100", "dark:bg-gray-800 dark:border-gray-700"),
        children: [
            emoji ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                children: emoji
            }, void 0, false, {
                fileName: "[project]/components/Note.tsx",
                lineNumber: 20,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Note.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Note.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/MDX.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "components",
    ()=>components
]);
// components/MDX.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Note$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Note.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Note$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Note$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const components = {
    Image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
    Note: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Note$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Note"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/posts/[slug].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/posts/[slug].tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$serialize__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$serialize$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__ = __turbopack_context__.i("[externals]/next-mdx-remote-client/serialize [external] (next-mdx-remote-client/serialize, esm_import, [project]/node_modules/next-mdx-remote-client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$csr__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$csr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__ = __turbopack_context__.i("[externals]/next-mdx-remote-client/csr [external] (next-mdx-remote-client/csr, esm_import, [project]/node_modules/next-mdx-remote-client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$rehype$2d$prism$2d$plus__$5b$external$5d$__$28$rehype$2d$prism$2d$plus$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$rehype$2d$prism$2d$plus$29$__ = __turbopack_context__.i("[externals]/rehype-prism-plus [external] (rehype-prism-plus, esm_import, [project]/node_modules/rehype-prism-plus)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mdx$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mdx.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Page.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MDX.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Prose.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, cjs, [project]/node_modules/clsx) <export default as cx>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$29$__ = __turbopack_context__.i("[externals]/remark-gfm [external] (remark-gfm, esm_import, [project]/node_modules/remark-gfm)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$serialize__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$serialize$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$csr__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$csr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$rehype$2d$prism$2d$plus__$5b$external$5d$__$28$rehype$2d$prism$2d$plus$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$rehype$2d$prism$2d$plus$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$serialize__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$serialize$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$csr__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$csr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$rehype$2d$prism$2d$plus__$5b$external$5d$__$28$rehype$2d$prism$2d$plus$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$rehype$2d$prism$2d$plus$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const Post = ({ frontMatter, mdx, previous, next })=>{
    if (mdx && "error" in mdx) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
            children: [
                "Error rendering content: ",
                String(mdx.error)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/posts/[slug].tsx",
            lineNumber: 30,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Page$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Page"], {
            ...frontMatter,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Prose$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Prose"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$csr__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$csr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__["MDXClient"], {
                        ...mdx,
                        components: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MDX$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["components"]
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[slug].tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/posts/[slug].tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                previous || next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("mt-12 pt-10 grid grid-cols-3 gap-4 items-center border-t", "border-gray-200", "dark:border-gray-700"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: previous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("mb-1  tracking-wider text-sm", "text-gray-500", "dark:text-gray-400"),
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/posts/[slug].tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/posts/${previous.slug}`,
                                        style: {
                                            fontFamily: "Syne Mono, monospace"
                                        },
                                        children: previous.title
                                    }, void 0, false, {
                                        fileName: "[project]/pages/posts/[slug].tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/pages/posts/[slug].tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    fontFamily: "Syne Mono, monospace"
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold", "bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm", "border border-white/20 dark:border-gray-700/30", "text-accent-blue dark:text-accent-red", "hover:bg-accent-blue hover:text-white ", "dark:hover:bg-accent-red dark:hover:text-white"),
                                children: "View All Notes"
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/pages/posts/[slug].tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__$3c$export__default__as__cx$3e$__["cx"])("mb-1  tracking-wider text-sm", "text-gray-500", "dark:text-gray-400"),
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/posts/[slug].tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/posts/${next.slug}`,
                                        style: {
                                            fontFamily: "Syne Mono, monospace"
                                        },
                                        children: next.title
                                    }, void 0, false, {
                                        fileName: "[project]/pages/posts/[slug].tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/pages/posts/[slug].tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/posts/[slug].tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            ]
        }, void 0, true, {
            fileName: "[project]/pages/posts/[slug].tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const getStaticPaths = async ()=>{
    const mdxFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mdx$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllMdx"])();
    return {
        paths: mdxFiles.map((file)=>({
                params: {
                    slug: file.frontMatter.slug
                }
            })),
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { slug } = context.params;
    const mdxFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mdx$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllMdx"])();
    const sortedMdxFiles = mdxFiles.sort((a, b)=>{
        const idA = a.frontMatter.id || 0;
        const idB = b.frontMatter.id || 0;
        return idA - idB;
    });
    const postIndex = sortedMdxFiles.findIndex((p)=>p.frontMatter.slug === slug);
    const post = sortedMdxFiles[postIndex];
    const { frontMatter, content } = post;
    const mdxContent = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2d$client$2f$serialize__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2d$client$2f$serialize$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$29$__["serialize"])({
        source: content,
        options: {
            mdxOptions: {
                remarkPlugins: [
                    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$29$__["default"]
                ],
                rehypePlugins: [
                    __TURBOPACK__imported__module__$5b$externals$5d2f$rehype$2d$prism$2d$plus__$5b$external$5d$__$28$rehype$2d$prism$2d$plus$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$rehype$2d$prism$2d$plus$29$__["default"]
                ]
            },
            scope: frontMatter
        }
    });
    return {
        props: {
            frontMatter,
            mdx: mdxContent,
            previous: sortedMdxFiles[postIndex - 1]?.frontMatter || null,
            next: sortedMdxFiles[postIndex + 1]?.frontMatter || null
        }
    };
};
const __TURBOPACK__default__export__ = Post;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0vp96kc._.js.map