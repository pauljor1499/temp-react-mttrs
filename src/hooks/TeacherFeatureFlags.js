const TeacherFeatureFlags = () => {
    const pages = {
        classes: {
            flag: true,
            pages: {
                classList: {
                    flag: true,
                },
                viewClass: {
                    flag: true,
                },
            },
        },
        dashboard: {
            flag: true,
        },
        resources: {
            flag: true,
        },
        settings: {
            flag: true,
        },
        sidebar: {
            flag: true,
        },
    };
    return pages;
};

export default TeacherFeatureFlags;
