export interface Result{
    results:[
        gender: any,
        name:{
            first: string,
            last: string
        },
        email: string,
        phone: string,
        picture:{
            large: string,
            medium: string,
            thumbnail: string
        }
    ];
}