export class TeacherURL {
    teacherEndPoint() {
        return "http://localhost:8000/teacher";
    }

    classEndPoint() {
        return "http://localhost:8000/class";
    }

    assignmentEndPoint() {
        return "http://localhost:8000/assignment";
    }

    // question_endpoint() {
    //     return "http://localhost:8001/question";
    // }
}

export class StudentURL {
    studentEndpoint() {
        return "http://localhost:8000/student";
    }

    classEndPoint() {
        return "http://localhost:8000/class";
    }
}
