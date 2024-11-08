interface Profile {
    name:string;
    age: number;
    email: string;
}

const myProfile:Profile={
    name:'Alice',
    age:30,
    email: 'alice@gmail.com'
}

type partialProfile = Partial<Profile>

function updateProfile (obj:partialProfile,val:partialProfile ):{}{

        obj.age = val.age;
    
    return  obj;
}

console.log(updateProfile(myProfile, {age:60}));
