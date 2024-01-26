export const exampleCv = {
    root: {
        id: 'root',
        childIds: [0, 1, 2]
    },
    personalInfo: {
        id: 0,
        title: "personal info",
        firstName: "Andy",
        lastName: "Sliwinski",
        professionalTitle: "Front-end developer",
        mobile: "123 456 789",
        email: "andy.developer@devmail.com",
        address: "Bridge Street 7, Bristol, UK"
    },
    experience: {
        id: 1,
        title: "experience",
        childIds: [3,4]
    },
    education: {
        id:2,
        title: "education",
        childIds: [5]
    },
    3: {
        id: 3,
        title: "experience section",
        position: "UI Designer",
        company: "Peer Inc.",
        from: "september 2011",
        to: "august 2013",
        description: "Design desktop applications for restaurants and car dealers."
    },
    4: {
        id: 4,
        title: "experience section",
        position: "UI Senior Designer",
        company: "Peer Inc.",
        from: "september 2011",
        to: "august 2013",
        description: "Design desktop and mobile applications for a major corporation."
    },
    5: {
        id: 5,
        title: "education section",
        couresTitle: "Computer Science",
        establishment: "London University",
        yearCompleted: "2010",
        description: " "
    }
}