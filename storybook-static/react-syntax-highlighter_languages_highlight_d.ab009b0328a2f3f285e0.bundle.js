(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1492:function(module,exports){module.exports=function(hljs){var integer_re="((0|[1-9][\\d_]*)|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))",escape_sequence_re="\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",D_INTEGER_MODE={className:"number",begin:"\\b"+integer_re+"(L|u|U|Lu|LU|uL|UL)?",relevance:0},D_FLOAT_MODE={className:"number",begin:"\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|"+integer_re+"(i|[fF]i|Li))",relevance:0},D_CHARACTER_MODE={className:"string",begin:"'("+escape_sequence_re+"|.)",end:"'",illegal:"."},D_STRING_MODE={className:"string",begin:'"',contains:[{begin:escape_sequence_re,relevance:0}],end:'"[cwd]?'},D_NESTING_COMMENT_MODE=hljs.COMMENT("\\/\\+","\\+\\/",{contains:["self"],relevance:10});return{lexemes:hljs.UNDERSCORE_IDENT_RE,keywords:{keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",literal:"false null true"},contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,D_NESTING_COMMENT_MODE,{className:"string",begin:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',relevance:10},D_STRING_MODE,{className:"string",begin:'[rq]"',end:'"[cwd]?',relevance:5},{className:"string",begin:"`",end:"`[cwd]?"},{className:"string",begin:'q"\\{',end:'\\}"'},D_FLOAT_MODE,D_INTEGER_MODE,D_CHARACTER_MODE,{className:"meta",begin:"^#!",end:"$",relevance:5},{className:"meta",begin:"#(line)",end:"$",relevance:5},{className:"keyword",begin:"@[a-zA-Z_][a-zA-Z_\\d]*"}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_d.ab009b0328a2f3f285e0.bundle.js.map