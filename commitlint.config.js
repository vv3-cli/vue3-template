module.exports = {
    extends: {
        parserPreset: "conventional-changelog-conventionalcommits",
        rules: {
            "body-leading-blank": [1, "always"],
            "body-max-line-length": [2, "always", 100],
            "footer-leading-blank": [1, "always"],
            "footer-max-line-length": [2, "always", 100],
            "header-max-length": [2, "always", 100],
            "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
            "subject-empty": [2, "never"],
            "subject-full-stop": [2, "never", "."],
            "type-case": [2, "always", "lower-case"],
            "type-empty": [2, "never"],
            "type-enum": [2, "always", ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]]
        },
        prompt: {
            questions: {
                type: {
                    description: "Select the type of change that you're committing",
                    enum: {
                        feat: {
                            description: "A new feature",
                            title: "Features",
                            emoji: "✨"
                        },
                        fix: {
                            description: "A bug fix",
                            title: "Bug Fixes",
                            emoji: "🐛"
                        },
                        docs: {
                            description: "Documentation only changes",
                            title: "Documentation",
                            emoji: "📚"
                        },
                        style: {
                            description: "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
                            title: "Styles",
                            emoji: "💎"
                        },
                        refactor: {
                            description: "A code change that neither fixes a bug nor adds a feature",
                            title: "Code Refactoring",
                            emoji: "📦"
                        },
                        perf: {
                            description: "A code change that improves performance",
                            title: "Performance Improvements",
                            emoji: "🚀"
                        },
                        test: {
                            description: "Adding missing tests or correcting existing tests",
                            title: "Tests",
                            emoji: "🚨"
                        },
                        build: {
                            description: "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
                            title: "Builds",
                            emoji: "🛠"
                        },
                        ci: {
                            description: "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
                            title: "Continuous Integrations",
                            emoji: "⚙️"
                        },
                        chore: {
                            description: "Other changes that don't modify src or test files",
                            title: "Chores",
                            emoji: "♻️"
                        },
                        revert: {
                            description: "Reverts a previous commit",
                            title: "Reverts",
                            emoji: "🗑"
                        }
                    }
                },
                scope: {
                    description: "What is the scope of this change (e.g. component or file name)"
                },
                subject: {
                    description: "Write a short, imperative tense description of the change"
                },
                body: {
                    description: "Provide a longer description of the change"
                },
                isBreaking: {
                    description: "Are there any breaking changes?"
                },
                breakingBody: {
                    description: "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself"
                },
                breaking: {
                    description: "Describe the breaking changes"
                },
                isIssueAffected: {
                    description: "Does this change affect any open issues?"
                },
                issuesBody: {
                    description: "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself"
                },
                issues: {
                    description: 'Add issue references (e.g. "fix #123", "re #123".)'
                }
            }
        }
    },
    // 以下时我们自定义的规则
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "bug", // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
                "feat", // 新功能（feature）
                "fix", // 修补bug
                "docs", // 文档（documentation）
                "style", // 格式（不影响代码运行的变动）
                "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
                "test", // 增加测试
                "chore", // 构建过程或辅助工具的变动
                "revert", // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
                "merge" // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
            ]
        ]
    }
};
