import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
await prisma.user.deleteMany();
await prisma.pet.deleteMany();
await prisma.post.deleteMany();
await prisma.specialization.deleteMany();


const cardiologist = await prisma.specialization.create({
    data: {
        name: 'Cardiologist',
        color: 'red'
    }
})
const neurologist = await prisma.specialization.create({
    data: {
        name: 'Neurologist',
        color: 'blue'
    }
})
const oncologist = await prisma.specialization.create({
    data: {
        name: 'Oncologist',
        color: 'orange'
    }
})
const nutritionist = await prisma.specialization.create({
    data: {
        name: 'Nutritionist',
        color: 'purple'
    }
})
const virologist = await prisma.specialization.create({
    data: {
        name: 'Virologist',
        color: 'green'
    }
})
const immunologist = await prisma.specialization.create({
    data: {
        name: 'Immunologist',
        color: 'cyan'
    }
})
const parasitologist = await prisma.specialization.create({
    data: {
        name: 'Parasitologist',
        color: 'yellow'
    }
})
const epidemiologist = await prisma.specialization.create({
    data: {
        name: 'Epidemiologist',
        color: 'lime'
    }
})
const surgeon = await prisma.specialization.create({
    data: {
        name: 'Surgeon',
        color: 'amber'
    }
})
const dentist = await prisma.specialization.create({
    data: {
        name: 'Dentist',
        color: 'fuchsia'
    }
})



const mikey = await prisma.user.create({
    data: {
        name: 'Mikey',
        email: 'mikey@gmail.com',
        phone: '123-456-7890',
        specializationId: dentist.id 
        
    }
    
});

const jason = await prisma.user.create({
    data: {
        name: 'Jason',
        email: 'jason@gmail.com',
        phone: '123-456-7890',
        specializationId: neurologist.id
    }
});

const justin = await prisma.user.create({
    data: {
        name: 'Justin',
        email: 'justin@gmail.com',
        phone: '123-456-7890',
        specializationId: oncologist.id
    }
    
    
});

const brandon = await prisma.user.create({
    data: {
        name: 'Brandon',
        email: 'brandon@gmail.com',
        phone: '123-456-7890',
        specializationId: virologist.id
    }
    
});

const dora = await prisma.user.create({
    data: {
        name: 'Dora',
        email: 'dora@gmail.com',
        phone: '123-456-7890',
        specializationId: nutritionist.id
    }
    
});

const sean = await prisma.user.create({
    data: {
        name: 'Sean',
        email: 'sean@gmail.com',
        phone: '123-456-7890',
        specializationId: surgeon.id
    }
    
});

const matt = await prisma.user.create({
    data: {
        name: 'Matt',
        email: 'matt@gmail.com',
        phone: '123-456-7890',
        specializationId: epidemiologist.id
    }
    
});


const dog = await prisma.pet.create({
    data: {
        name: 'Dog',
        color: 'blue'
    }
})
const cat = await prisma.pet.create({
    data: {
        name: 'Cat',
        color: 'amber'
    }
})
const bird = await prisma.pet.create({
    data: {
        name: 'Bird',
        color: 'green'   
    }
})
const rabbit = await prisma.pet.create({
    data: {
        name: 'Rabbit',
        color: 'red'
    }
})
const exotic = await prisma.pet.create({
    data: {
        name: 'Exotic',
        color: 'violet'
    }
})


const post1 = await prisma.post.create({
    data: {
        description: 'Desperate for answers. My pet has been showing symptoms such as weight loss, decreased appetite, and lethargy, and I suspect they may have a underlying health condition. I am seeking advice and support from those who have gone through similar experiences. If you have any tips or recommendations, I would be so grateful. Thank you for your time and help.',
        title: 'Does my dog need professional help?',
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
        description: 'In need of guidance. My dear pet has been exhibiting symptoms such as coughing, shortness of breath, and fatigue. I am at a loss on how to best care for them. Has anyone else faced a similar situation? Any advice or recommendations would be greatly appreciated. Thank you for your time and help.',
        title: 'Does my cat have a heart condition?',
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
        description: 'Seeking advice and support. My pet is experiencing symptoms such as bad breath, discomfort while eating, and excessive drooling. I am hoping to find advice from others who may have gone through similar experiences. Any suggestions or tips would be greatly appreciated. Thanks.',
        title: 'Something is wrong with my chinchilla teeth',
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
        description: 'Urgent help needed. My pet bird is exhibiting symptoms such as difficulty eating, pain while preening, and a change in the shape of their beak. I am seeking advice from others who may have dealt with similar situations. Any suggestions or tips to help my feathered friend recover would be greatly appreciated. Thank you for your support.',
        title: 'Is my bird gonna die',
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
        description: 'SOS! My pet is in need of support. They are experiencing symptoms such as limping, swelling, and pain. I am looking for advice from others who have faced similar challenges. Please, if you have any tips or recommendations, let me know. I am grateful for any help during this difficult time. Thank you.',
        title: 'my rabbit has a foot problem',
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
        description: 'Help needed! My pet is exhibiting symptoms such as coughing, wheezing, and shortness of breath, and I suspect they may have a lung condition. I am searching for advice and support on how best to proceed with a diagnosis and treatment. If you have any experiences or insights to share, I would be so grateful. Thank you for your time and help.',
        title: 'Help! My dog is exhibiting scary symptoms',
        userId: dora.id,
        rating: 5,
        resolved: false,
        area: "Lung",
        petId: dog.id,
        urgency: true
    }
    
});


console.log('sup bitch');