import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mikey = await prisma.user.create({
    data: {
        name: 'mikey',
        email: 'mikey@gmail.com',
        specialization: 'mikey-oncology',
        position: 'mikey-specialist',
        phone: '123-456-7890'
        specializationid: 
        
    }
    
});

const jason = await prisma.user.create({
    data: {
        name: 'jason',
        email: 'jason@gmail.com',
        specialization: 'jason-oncology',
        position: 'jason-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
});

const justin = await prisma.user.create({
    data: {
        name: 'justin',
        email: 'justin@gmail.com',
        specialization: 'justin-oncology',
        position: 'justin-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
    
    
});

const brandon = await prisma.user.create({
    data: {
        name: 'brandon',
        email: 'brandon@gmail.com',
        specialization: 'brandon-oncology',
        position: 'brandon-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
    
});

const dora = await prisma.user.create({
    data: {
        name: 'dora',
        email: 'dora@gmail.com',
        specialization: 'dora-oncology',
        position: 'dora-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
    
});

const sean = await prisma.user.create({
    data: {
        name: 'sean',
        email: 'sean@gmail.com',
        specialization: 'sean-oncology',
        position: 'sean-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
    
});

const matt = await prisma.user.create({
    data: {
        name: 'matt',
        email: 'matt@gmail.com',
        specialization: 'matt-oncology',
        position: 'matt-specialist',
        phone: '123-456-7890'
        specializationid: 
    }
    
});


const post1 = await prisma.post.create({
    data: {
        description: 'post1',
        title: 'title1',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});

const post2 = await prisma.post.create({
    data: {
        description: 'post2',
        title: 'title2',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});

const post3 = await prisma.post.create({
    data: {
        description: 'post3',
        title: 'title3',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
});


const post4 = await prisma.post.create({
    data: {
        description: 'post4',
        title: 'title4',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});


const post5 = await prisma.post.create({
    data: {
        description: 'post5',
        title: 'title5',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});


const post6 = await prisma.post.create({
    data: {
        description: 'post6',
        title: 'title6',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});


const post7 = await prisma.post.create({
    data: {
        description: 'post7',
        title: 'title7',
        user: person,
        userId: person.id,
        rating: 5,
        resolved: false
    }
    
});

const cardiologist = await prisma.specialization.create({
    data: {
        name: 'cardiologist',
        users: mikey,
        color: 'red'
    }
})
const neurologist = await prisma.specialization.create({
    data: {
        name: 'neurologist',
        users: jason,
        color: 'blue'
    }
})
const oncologist = await prisma.specialization.create({
    data: {
        name: 'oncologist',
        users: sean,
        color: 'orange'
    }
})
const nutritionist = await prisma.specialization.create({
    data: {
        name: 'nutritionist',
        users: dora,
        color: 'purple'
    }
})
const virologist = await prisma.specialization.create({
    data: {
        name: 'virologist',
        users: brandon,
        color: 'green'
    }
})
const immunologist = await prisma.specialization.create({
    data: {
        name: 'immunologist',
        users: justin,
        color: 'cyan'
    }
})
const parasitologist = await prisma.specialization.create({
    data: {
        name: 'parasitologist',
        users: matt,
        color: 'yellow'
    }
})
const epidemiologist = await prisma.specialization.create({
    data: {
        name: 'epidemiologist',
        users: mikey,
        color: 'lime'
    }
})
const surgeon = await prisma.specialization.create({
    data: {
        name: 'surgeon',
        users: jason,
        color: 'amber'
    }
})
const dentist = await prisma.specialization.create({
    data: {
        name: 'dentist',
        users: justin,
        color: 'fuchia'
    }
})

const dog = await prisma.pet.create({
    data: {
        name: 'dog',
        posts: post1
        emoji: U+1F415
    }
})
const cat = await prisma.pet.create({
    data: {
        name: 'cat',
        posts: post2
        emoji:
    }
})
const snake = await prisma.pet.create({
    data: {
        name: 'snake',
        posts: post3
        emoji:
    }
})
const rabbit = await prisma.pet.create({
    data: {
        name: 'rabbit',
        posts: post4
        emoji:
    }
})
const hamster = await prisma.pet.create({
    data: {
        name: 'hamster',
        posts: post5
        emoji:
    }
})
const bird = await prisma.pet.create({
    data: {
        name: 'bird',
        posts: post6
        emoji:
    }
})
const lizard = await prisma.pet.create({
    data: {
        name: 'lizard',
        posts: 
        emoji:
    }
})
const pig = await prisma.pet.create({
    data: {
        name: 'pig',
        posts: 
        emoji: '🐷'
    }
})
const turtles = await prisma.pet.create({
    data: {
        name: 'turtles',
        posts: 
        emoji:
    }
})


console.log('sup bitch');





