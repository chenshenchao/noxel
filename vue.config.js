module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: 'noxel',
                appId: 'noxel',
                copyright: 'chenshenchao',
                directories: {
                    output: 'build'
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './logo.ico',
                    uninstallerIcon: './logo.ico',
                    installerHeaderIcon: './logo.ico',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: 'noxel'
                },
                dmg: {
                    contents: [
                        {
                            x: 410,
                            y: 150,
                            type: 'link',
                            path: '/Applications'
                        },
                        {
                            x: 130,
                            y: 150,
                            type: 'file'
                        }
                    ]
                },
                mac: {
                    icon: 'logo.ico',
                    artifactName: '${name}_setup_${version}.${ext}'
                },
                win: {
                    icon: 'logo.ico',
                    target: [
                        {
                            target: 'nsis',
                            arch: [
                                'x64'
                            ]
                        }
                    ],
                    artifactName: '${name}_setup_${version}.${ext}'
                },
                linux: {
                    icon: 'logo.ico',
                    artifactName: '${name}_setup_${version}.${ext}'
                }
            }
        }
    }
}