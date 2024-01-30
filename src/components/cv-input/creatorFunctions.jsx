import { v4 as uuidv4 } from 'uuid';

const createEducationItem = () => {
    return {
        id: uuidv4(),
        courseTitle: "",
        establishment: "",
        yearCompleted: "",
        description: ""
    }
}

const createExperienceItem = () => {
    return {
        id: uuidv4(),
        position: "",
        company: "",
        from: "",
        to: "",
        description: ""
    }
}

export { createEducationItem, createExperienceItem }

