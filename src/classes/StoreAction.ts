export class StoreAction {
    public type:string;
    public payload:any;

    constructor(type:string, payload:any) {
        this.type = type;
        this.payload = payload;
    }

    public getAsDispatch = () => {
        return {
            payload: this.payload,
            type: this.type
        };
    }
}
