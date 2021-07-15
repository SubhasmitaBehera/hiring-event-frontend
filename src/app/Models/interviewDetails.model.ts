import { InterviewStatus } from "./interviewStatus.model";
import { ModelEntry } from "./modelEntry.model";

export class InterviewDetails extends ModelEntry{
    private id : number;
    private  title : String; // INTERVIEW JAVA ENGG 2 | JOHN DOE | 6 YEARS
    private  jobDetailsId : number;
    private  candidateEmail : String;

    private  status : InterviewStatus;
}
