class Playwright2x {
    static batch_name = "Playwright 2x";
    static mentor = "Pramod";
    static #coupan_code = "#PLAY1000";

    student_name;
    student_age;
    student_email;
    student_phone;

    constructor(student_name, student_age, student_email, student_phone) {
        this.student_name = student_name;
        this.student_age = student_age;
        this.student_email = student_email;
        this.student_phone = student_phone;
    }

    getStudentDetails() {
        return `Name: ${this.student_name}, Age: ${this.student_age}, Email: ${this.student_email}, Phone: ${this.student_phone}`;
    }

    static getCoupenCode() {
        return this.#coupan_code;
    }
}

const student_1 = new Playwright2x(
    "Ram",
    25,
    "ram@playwright2x.com",
    "1989999881",
);
const student_2 = new Playwright2x(
    "Madhu",
    27,
    "madhu@playwright2x.com",
    "2989999882",
);
const student_3 = new Playwright2x(
    "Mohan",
    30,
    "mohan@playwright2x.com",
    "3989999883",
);
const student_4 = new Playwright2x(
    "Siri",
    25,
    "siri@playwright2x.com",
    "4989999884",
);
const student_5 = new Playwright2x(
    "Praveen",
    25,
    "praveen@playwright2x.com",
    "5989999885",
);

console.log(
    `Batch: ${Playwright2x.batch_name}, Mentor: ${Playwright2x.mentor}, `,
    student_1.getStudentDetails(),
);
console.log(
    `Batch: ${Playwright2x.batch_name}, Mentor: ${Playwright2x.mentor}, `,
    student_2.getStudentDetails(),
);
console.log(
    `Batch: ${Playwright2x.batch_name}, Mentor: ${Playwright2x.mentor}, `,
    student_3.getStudentDetails(),
);
console.log(
    `Batch: ${Playwright2x.batch_name}, Mentor: ${Playwright2x.mentor}, `,
    student_4.getStudentDetails(),
);
console.log(
    `Batch: ${Playwright2x.batch_name}, Mentor: ${Playwright2x.mentor}, `,
    student_5.getStudentDetails(),
);

console.log(`Coupen code : ${Playwright2x.getCoupenCode()}`);
