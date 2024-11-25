module.exports = {
    rules: {
        'task-name-format': [2, 'always', /^pbi-\d+ -/],
        'scope-type-format': [2, 'always', /-\s(refactor|fix|feat|docs|test|chore|style)\s-\s.+/]
    },
    plugins: [
        {
            rules: {
                'task-name-format': ({ raw }) => {
                    const regex = /^pbi-\d+ -/;
                    return [regex.test(raw),
                        `❌ Commit message must start with "pbi-<number> -". Example: "pbi-1234 - refactor - optimize function"`
                    ];
                },
                'scope-type-format': ({ raw }) => {
                    const regex = /-\s(refactor|fix|feat|docs|test|chore|style)\s-\s.+/;
                    return [regex.test(raw),
                        `❌ Commit message must include a valid scope and description.\nValid scopes: refactor, fix, feat, docs, test, chore, style`
                    ];
                }
            }
        }
    ]
}