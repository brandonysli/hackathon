import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

await prisma.user.deleteMany();
await prisma.pet.deleteMany();
await prisma.post.deleteMany();
await prisma.specialization.deleteMany();


const cardiologist = await prisma.specialization.create({
    data: {
        name: 'cardiologist',
        color: 'red'
    }
})
const neurologist = await prisma.specialization.create({
    data: {
        name: 'neurologist',
        color: 'blue'
    }
})
const oncologist = await prisma.specialization.create({
    data: {
        name: 'oncologist',
        color: 'orange'
    }
})
const nutritionist = await prisma.specialization.create({
    data: {
        name: 'nutritionist',
        color: 'purple'
    }
})
const virologist = await prisma.specialization.create({
    data: {
        name: 'virologist',
        color: 'green'
    }
})
const immunologist = await prisma.specialization.create({
    data: {
        name: 'immunologist',
        color: 'cyan'
    }
})
const parasitologist = await prisma.specialization.create({
    data: {
        name: 'parasitologist',
        color: 'yellow'
    }
})
const epidemiologist = await prisma.specialization.create({
    data: {
        name: 'epidemiologist',
        color: 'lime'
    }
})
const surgeon = await prisma.specialization.create({
    data: {
        name: 'surgeon',
        color: 'amber'
    }
})
const dentist = await prisma.specialization.create({
    data: {
        name: 'dentist',
        color: 'fuchia'
    }
})



const mikey = await prisma.user.create({
    data: {
        name: 'mikey',
        email: 'mikey@gmail.com',
        phone: '123-456-7890',
        specializationId: dentist.id 
        
    }
    
});

const jason = await prisma.user.create({
    data: {
        name: 'jason',
        email: 'jason@gmail.com',
        phone: '123-456-7890',
        specializationId: neurologist.id
    }
});

const justin = await prisma.user.create({
    data: {
        name: 'justin',
        email: 'justin@gmail.com',
        phone: '123-456-7890',
        specializationId: oncologist.id
    }
    
    
});

const brandon = await prisma.user.create({
    data: {
        name: 'brandon',
        email: 'brandon@gmail.com',
        phone: '123-456-7890',
        specializationId: virologist.id
    }
    
});

const dora = await prisma.user.create({
    data: {
        name: 'dora',
        email: 'dora@gmail.com',
        phone: '123-456-7890',
        specializationId: nutritionist.id
    }
    
});

const sean = await prisma.user.create({
    data: {
        name: 'sean',
        email: 'sean@gmail.com',
        phone: '123-456-7890',
        specializationId: surgeon.id
    }
    
});

const matt = await prisma.user.create({
    data: {
        name: 'matt',
        email: 'matt@gmail.com',
        phone: '123-456-7890',
        specializationId: epidemiologist.id
    }
    
});


const dog = await prisma.pet.create({
    data: {
        name: 'Dog',
    }
})
const cat = await prisma.pet.create({
    data: {
        name: 'Cat',
    }
})
const bird = await prisma.pet.create({
    data: {
        name: 'Bird',
    }
})
const rabbit = await prisma.pet.create({
    data: {
        name: 'Rabbit',
    }
})
const exotic = await prisma.pet.create({
    data: {
        name: 'Exotic',
    }
})


const post1 = await prisma.post.create({
    data: {
        description: 'post1',
        title: 'title1',
        userId: mikey.id,
        rating: 5,
        resolved: false,
        area: "Unknown",
        petId: dog.id,
        urgency: true


    }
    
});

const post2 = await prisma.post.create({
    data: {
        description: 'post2',
        title: 'title2',
        userId: sean.id,
        rating: 5,
        resolved: false,
        area: "Heart",
        petId: cat.id,
        urgency: false
    }
    
});

const post3 = await prisma.post.create({
    data: {
        description: 'post3',
        title: 'title3',
        userId: sean.id,
        rating: 5,
        resolved: false,
        area: "Teeth",
        petId: exotic.id,
        urgency: false
    }
});


const post4 = await prisma.post.create({
    data: {
        description: 'post4',
        title: 'title4',
        userId: jason.id,
        rating: 4,
        resolved: false,
        area: "Beak",
        petId: bird.id,
        urgency: true
    } 
});


const post5 = await prisma.post.create({
    data: {
        description: 'post5',
        title: 'title5',
        userId: justin.id,
        rating: 5,
        resolved: true,
        area: "Foot",
        petId: rabbit.id,
        urgency: false
    }
    
});


const post6 = await prisma.post.create({
    data: {
        description: 'post6',
        title: 'title6',
        userId: dora.id,
        rating: 5,
        resolved: false,
        area: "Lung",
        petId: dog.id,
        urgency: true
    }
    
});


console.log('sup bitch');

