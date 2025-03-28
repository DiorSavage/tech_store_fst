export interface IBasket {
    id: string;
    count: number;
    price: number;
}

export interface IAddress {
    id: number;
    city: string;
    housenumber: number;
    street: string;
    name: "Main" | "Additional"
}

export interface IUser {
    username: string;
    id: string;
    email: string;
    password: string;
    user_icon: string;
    firstname?: string;
    surname?: string;
    basket: IBasket[];
    addresses: IAddress[]
}

export interface IUserCreate extends Omit<IUser, "id"> {
    confirmpass?: string
}

export interface IUserChange extends Omit<IUser, "id"> {}

export interface IPassChange {
    password: string;
    confirmpassword: string;
    newpassword: string;
}