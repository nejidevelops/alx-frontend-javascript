/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingC: number;
    }

    export class Cpp extends Subject {
        getRequirements() : string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingC === "undefined"
                || this.teacher.experienceTeachingC === 0) {
                    return "No available teacher";
                }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
