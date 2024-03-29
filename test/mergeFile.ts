export default {
  "html": {
    "HTML Template": {
      "prefix": "!rh",
      "body": [
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "",
        "<head>",
        "\t<meta charset=\"UTF-8\">",
        "\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
        "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/0static/css/test-body.css\">",
        "\t<title>${TM_FILENAME_BASE:Document}</title>",
        "</head>",
        "",
        "<style>",
        "",
        "</style>",
        "",
        "<body>",
        "$1",
        "\t<script src=\"https://cdn.jsdelivr.net/npm/0static/js/addWindowSize.js\" defer></script>",
        "\t<script>",
        "\t</script>",
        "</body>",
        "",
        "</html>"
      ],
      "description": "Ruihuag HTML Template"
    }
  },
  "js": {
    "ts disable line": {
      "prefix": "ts-dl",
      "body": [
        "// @ts-ignore (define in dts)"
      ],
      "description": "ts disable line"
    },
    "ESLint disable line Element": {
      "prefix": "es-dl",
      "body": [
        "// eslint-disable-line"
      ],
      "description": "Log ESLint line disable"
    },
    "ESLint disable next line Element": {
      "prefix": "es-dnl",
      "body": [
        "// eslint-disable-next-line"
      ],
      "description": "Log ESLint line next disable"
    },
    "ESLint disable File Element": {
      "prefix": "es-df",
      "body": [
        "/* eslint-disable*/"
      ],
      "description": "Log ESLit file disable"
    },
    "console with attribute": {
      "prefix": "cd",
      "body": [
        "console.log($1,'---$1---')$2"
      ],
      "description": "Log output to console with attribute"
    },
    "line comment block": {
      "prefix": [
        "rrl",
        "al"
      ],
      "body": [
        "/** $1 */"
      ],
      "description": "Log output to console"
    },
    "comment block": {
      "prefix": "rrb",
      "body": [
        "/** $1 start **/",
        "$2",
        "/** $1 end **/"
      ],
      "description": "Log output to console"
    },
    "block": {
      "prefix": "rra",
      "body": [
        "/*--- start ---*/",
        "$1",
        "/*--- end ---*/"
      ],
      "description": "Log output to console"
    },
    "html comment block": {
      "prefix": "rrh",
      "body": [
        "<!-- $1 start -->",
        "<!-- $1 end -->"
      ],
      "description": "html comment block"
    },
    "@title": {
      "prefix": [
        "@t",
        "@title"
      ],
      "body": [
        "@title $1$0"
      ],
      "description": "Log output to @title"
    },
    "@lastUpdate": {
      "prefix": [
        "@last",
        "@lastUpdate"
      ],
      "body": [
        "@lastUpdate $1$0"
      ],
      "description": "Log output to @lastUpdate"
    },
    "@paradigm": {
      "prefix": [
        "@p",
        "@paradigm"
      ],
      "body": [
        "@paradigm $1$0"
      ],
      "description": "Log output to @paradigm"
    }
  },
  "md": {
    "Markdwon init": {
      "prefix": "!md",
      "body": [
        "# [`${TM_FILENAME_BASE}`]()"
      ],
      "description": "Markdwon init"
    },
    "css block": {
      "prefix": [
        "`cs",
        "`css",
        "``cs",
        "``css",
        "```cs",
        "```css"
      ],
      "body": [
        "```css",
        "${1}",
        "```"
      ],
      "description": "css block"
    },
    "less block": {
      "prefix": [
        "`les",
        "`less",
        "``les",
        "``less",
        "```les",
        "```less"
      ],
      "body": [
        "```less",
        "${1}",
        "```"
      ],
      "description": "less block"
    },
    "Python block": {
      "prefix": [
        "``py"
      ],
      "body": [
        "```py",
        "${1}",
        "```"
      ],
      "description": "Python block"
    },
    "js block": {
      "prefix": [
        "`js",
        "``js",
        "```js"
      ],
      "body": [
        "```js",
        "${1}",
        "```"
      ],
      "description": "js block"
    },
    "json block": {
      "prefix": [
        "`json",
        "``json",
        "```json"
      ],
      "body": [
        "```json",
        "${1}",
        "```"
      ],
      "description": "json block"
    },
    "json Object block": {
      "prefix": [
        "`json{",
        "``json{",
        "```json{"
      ],
      "body": [
        "```json",
        "{",
        "\t${1}",
        "}",
        "```"
      ],
      "description": "json block"
    },
    "ts block": {
      "prefix": [
        "`ts",
        "``ts",
        "```ts"
      ],
      "body": [
        "```ts",
        "${1}",
        "```"
      ],
      "description": "ts block"
    },
    "tsx block": {
      "prefix": [
        "`tx",
        "`tsx",
        "``tx",
        "``tsx",
        "```tx",
        "```tsx"
      ],
      "body": [
        "```tsx",
        "${1}",
        "```"
      ],
      "description": "tsx block"
    },
    "jsx block": {
      "prefix": [
        "`jx",
        "`jsx",
        "``jx",
        "``jsx",
        "```jx",
        "```jsx"
      ],
      "body": [
        "```tsx",
        "${1}",
        "```"
      ],
      "description": "tsx block"
    },
    "shell block": {
      "prefix": [
        "`shell",
        "``shell",
        "```shell"
      ],
      "body": [
        "```shell",
        "${1}",
        "```"
      ],
      "description": "shell block"
    },
    "html block": {
      "prefix": [
        "`html",
        "`htm",
        "``html",
        "``htm",
        "```html",
        "```htm"
      ],
      "body": [
        "```html",
        "${1}",
        "```"
      ],
      "description": "html block"
    },
    "html css block": {
      "prefix": [
        "`htcs",
        "`csht"
      ],
      "body": [
        "```html",
        "${1}",
        "```",
        "",
        "```css",
        "${2}",
        "```"
      ],
      "description": "html css block"
    },
    "html js block": {
      "prefix": [
        "`htjs",
        "`jsht"
      ],
      "body": [
        "```html",
        "${1}",
        "```",
        "",
        "```js",
        "${2}",
        "```"
      ],
      "description": "html js block"
    },
    "Markdown Table 2 Cols": {
      "prefix": [
        "tt",
        "tt2"
      ],
      "body": [
        "|:----|:----|"
      ],
      "description": "Markdown Table"
    },
    "Markdown Table 3 Cols": {
      "prefix": [
        "tt3"
      ],
      "body": [
        "|:----|:----|:----|"
      ],
      "description": "Markdown Table"
    },
    "Markdown Table 4 Cols": {
      "prefix": [
        "tt4"
      ],
      "body": [
        "|:----|:----|:----|:----|"
      ],
      "description": "Markdown Table"
    },
    "h1": {
      "prefix": [
        "t1"
      ],
      "body": [
        "#\t${1}",
        ""
      ],
      "description": "h1"
    },
    "h2": {
      "prefix": [
        "t2"
      ],
      "body": [
        "##\t${1}",
        ""
      ],
      "description": "h2"
    },
    "h3": {
      "prefix": [
        "t3"
      ],
      "body": [
        "###\t${1}",
        ""
      ],
      "description": "h3"
    },
    "h4": {
      "prefix": [
        "t4"
      ],
      "body": [
        "####\t${1}",
        ""
      ],
      "description": "h4"
    },
    "h5": {
      "prefix": [
        "t5"
      ],
      "body": [
        "#####\t${1}",
        ""
      ],
      "description": "h5"
    },
    "h6": {
      "prefix": [
        "t6"
      ],
      "body": [
        "######\t${1}",
        ""
      ],
      "description": "h6"
    },
    "code": {
      "prefix": [
        "\\c"
      ],
      "body": [
        "<code>${1}</code>"
      ],
      "description": "code"
    },
    "md-img": {
      "prefix": [
        "md-img"
      ],
      "body": [
        "<img src=\"${1}\" style=\"zoom:0.25;\" />"
      ],
      "description": "md-img"
    }
  },
  "react-js": {
    "function": {
      "prefix": "!fn",
      "body": [
        "function ${TM_FILENAME_BASE}${1}() {",
        "\treturn",
        "}"
      ],
      "description": "function"
    },
    "react-function-Component": {
      "prefix": "!fn-C",
      "body": [
        "import React from \"react\"",
        "",
        "export function ${TM_FILENAME_BASE}${0}(props){",
        "\tconst {} = props",
        "\treturn (",
        "\t\t<div>",
        "\t\t\t${TM_FILENAME_BASE}${0}",
        "\t\t\t{JSON.stringify(Object.keys(props))}",
        "\t\t</div>",
        "\t)",
        "}",
        ""
      ],
      "description": "React-Function-Element-tsx"
    },
    "react-function-simple-function": {
      "prefix": "!fn-c",
      "body": [
        "import React from \"react\"",
        "",
        "export function ${TM_FILENAME_BASE}${0}(){",
        "\treturn (<div>",
        "\t\t${TM_FILENAME_BASE}${0}",
        "\t</div>)",
        "}",
        ""
      ],
      "description": "React-Function-Element-tsx"
    }
  },
  "react-ts": {
    "function": {
      "prefix": "!fn",
      "body": [
        "function ${TM_FILENAME_BASE}${1}():void {",
        "\treturn",
        "}"
      ],
      "description": "function"
    },
    "react-function-Component": {
      "prefix": "!fn-C",
      "body": [
        "import React from \"react\"",
        "",
        "export interface ${TM_FILENAME_BASE}${0}Props {",
        "\t[key: string]: any",
        "}",
        "",
        "export function ${TM_FILENAME_BASE}${0}(props: ${TM_FILENAME_BASE}${0}Props){",
        "\tconst {} = props",
        "\treturn (",
        "\t\t<div>",
        "\t\t\t${TM_FILENAME_BASE}${0}",
        "\t\t\t{JSON.stringify(Object.keys(props))}",
        "\t\t</div>",
        "\t)",
        "}",
        ""
      ],
      "description": "React-Function-Element-tsx"
    },
    "react-function-simple-function": {
      "prefix": "!fn-c",
      "body": [
        "import React from \"react\"",
        "",
        "export function ${TM_FILENAME_BASE}${0}(){",
        "\treturn (<div>",
        "\t\t${TM_FILENAME_BASE}${0}",
        "\t</div>)",
        "}",
        ""
      ],
      "description": "React-Function-Element-tsx"
    }
  },
  "ts": {
    "export-function-ts": {
      "prefix": "!fn-e",
      "body": [
        "export function ${TM_FILENAME_BASE}${0}(){",
        "\treturn",
        "}",
        ""
      ],
      "description": "export-function-ts"
    }
  },
  "vue": {
    "Vue Script + Template": {
      "scope": "vue",
      "prefix": "!js",
      "body": [
        "<script setup>",
        "\t$1",
        "</script>",
        "",
        "<template>",
        "\t$2",
        "</template>"
      ],
      "description": "Vue Script + Template"
    },
    "Vue Script + Template + TS": {
      "scope": "vue",
      "prefix": "!ts",
      "body": [
        "<script setup lang=\"ts\">",
        "\t$1",
        "</script>",
        "",
        "<template>",
        "\t$2",
        "</template>"
      ],
      "description": "Vue Script + Template"
    }
  }
}