/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts"/>
/// <reference path="Cpp.ts"/>
/// <reference path="React.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        getRequirements() : string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher() : string {
            if (typeof this.teacher.experienceTeachingJava === "undefined"
                || this.teacher.experienceTeachingJava === 0) {
                    return "No available teacher";
                }
                return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
