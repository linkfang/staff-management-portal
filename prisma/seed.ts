import { prisma } from '../src/server/prisma'

async function main() {
  const persons = await prisma.person.createMany({
    data: [
      {
        email: 'bob.smith@thework.com',
        firstName: 'Bob',
        lastName: 'Smith',
        preferredName: 'Bobby',
        title: 'Full-stack Developer',
      },
      {
        email: 'charlie.brown@thework.com',
        firstName: 'Charlie',
        lastName: 'Brown',
        preferredName: '',
        title: 'Android Developer',
      },
      {
        email: 'david.jones@thework.com',
        firstName: 'David',
        lastName: 'Jones',
        preferredName: 'Dave',
        title: 'iOS Developer',
      },
      {
        email: 'emma.wilson@thework.com',
        firstName: 'Emma',
        lastName: 'Wilson',
        preferredName: 'Emmy',
        title: 'Mobile Developer',
      },
      {
        email: 'frank.harris@thework.com',
        firstName: 'Frank',
        lastName: 'Harris',
        preferredName: '',
        title: 'Backend Developer',
      },
      {
        email: 'grace.lee@thework.com',
        firstName: 'Grace',
        lastName: 'Lee',
        preferredName: 'Gracie',
        title: 'UI/UX Designer',
      },
      {
        email: 'henry.clark@thework.com',
        firstName: 'Henry',
        lastName: 'Clark',
        preferredName: 'Hank',
        title: 'Project Manager',
      },
      {
        email: 'isabella.miller@thework.com',
        firstName: 'Isabella',
        lastName: 'Miller',
        preferredName: 'Bella',
        title: 'QA Tester',
      },
      {
        email: 'james.taylor@thework.com',
        firstName: 'James',
        lastName: 'Taylor',
        preferredName: 'Jamie',
        title: 'Frontend Developer',
      },
      {
        email: 'kate.williams@thework.com',
        firstName: 'Kate',
        lastName: 'Williams',
        preferredName: 'Katie',
        title: 'Full-stack Developer',
      },
      {
        email: 'liam.thomas@thework.com',
        firstName: 'Liam',
        lastName: 'Thomas',
        preferredName: '',
        title: 'Android Developer',
      },
      {
        email: 'maya.davis@thework.com',
        firstName: 'Maya',
        lastName: 'Davis',
        preferredName: '',
        title: 'iOS Developer',
      },
      {
        email: 'noah.johnson@thework.com',
        firstName: 'Noah',
        lastName: 'Johnson',
        preferredName: '',
        title: 'Mobile Developer',
      },
      {
        email: 'olivia.moore@thework.com',
        firstName: 'Olivia',
        lastName: 'Moore',
        preferredName: 'Liv',
        title: 'Backend Developer',
      },
      {
        email: 'peter.walker@thework.com',
        firstName: 'Peter',
        lastName: 'Walker',
        preferredName: 'Pete',
        title: 'UI/UX Designer',
      },
      {
        email: 'quinn.hall@thework.com',
        firstName: 'Quinn',
        lastName: 'Hall',
        preferredName: '',
        title: 'Project Manager',
      },
      {
        email: 'rachel.wilson@thework.com',
        firstName: 'Rachel',
        lastName: 'Wilson',
        preferredName: 'Rae',
        title: 'QA Tester',
      },
      {
        email: 'samuel.jackson@thework.com',
        firstName: 'Samuel',
        lastName: 'Jackson',
        preferredName: 'Sam',
        title: 'Frontend Developer',
      },
      {
        email: 'tara.brown@thework.com',
        firstName: 'Tara',
        lastName: 'Brown',
        preferredName: '',
        title: 'Full-stack Developer',
      },
      {
        email: 'umesh.patel@thework.com',
        firstName: 'Umesh',
        lastName: 'Patel',
        preferredName: '',
        title: 'Android Developer',
      },
      {
        email: 'victoria.smith@thework.com',
        firstName: 'Victoria',
        lastName: 'Smith',
        preferredName: 'Vicky',
        title: 'iOS Developer',
      },
      {
        email: 'william.jones@thework.com',
        firstName: 'William',
        lastName: 'Jones',
        preferredName: 'Will',
        title: 'Mobile Developer',
      },
      {
        email: 'xavier.martin@thework.com',
        firstName: 'Xavier',
        lastName: 'Martin',
        preferredName: '',
        title: 'Backend Developer',
      },
      {
        email: 'yara.garcia@thework.com',
        firstName: 'Yara',
        lastName: 'Garcia',
        preferredName: '',
        title: 'UI/UX Designer',
      },
      {
        email: 'zachary.thompson@thework.com',
        firstName: 'Zachary',
        lastName: 'Thompson',
        preferredName: 'Zack',
        title: 'Project Manager',
      },
      {
        email: 'adam.wilson@thework.com',
        firstName: 'Adam',
        lastName: 'Wilson',
        preferredName: '',
        title: 'QA Tester',
      },
      {
        email: 'bella.johnson@thework.com',
        firstName: 'Bella',
        lastName: 'Johnson',
        preferredName: '',
        title: 'Frontend Developer',
      },
      {
        email: 'carlos.rodriguez@thework.com',
        firstName: 'Carlos',
        lastName: 'Rodriguez',
        preferredName: 'Carl',
        title: 'Full-stack Developer',
      },
      {
        email: 'diana.lee@thework.com',
        firstName: 'Diana',
        lastName: 'Lee',
        preferredName: '',
        title: 'Android Developer',
      },
      {
        email: 'eric.wang@thework.com',
        firstName: 'Eric',
        lastName: 'Wang',
        preferredName: '',
        title: 'iOS Developer',
      },
      {
        email: 'fiona.clark@thework.com',
        firstName: 'Fiona',
        lastName: 'Clark',
        preferredName: 'Fifi',
        title: 'Mobile Developer',
      },
      {
        email: 'george.harris@thework.com',
        firstName: 'George',
        lastName: 'Harris',
        preferredName: '',
        title: 'Backend Developer',
      },
      {
        email: 'hannah.miller@thework.com',
        firstName: 'Hannah',
        lastName: 'Miller',
        preferredName: '',
        title: 'UI/UX Designer',
      },
      {
        email: 'ivan.lopez@thework.com',
        firstName: 'Ivan',
        lastName: 'Lopez',
        preferredName: '',
        title: 'Project Manager',
      },
      {
        email: 'jessica.thomas@thework.com',
        firstName: 'Jessica',
        lastName: 'Thomas',
        preferredName: 'Jess',
        title: 'QA Tester',
      },
      {
        email: 'kevin.davis@thework.com',
        firstName: 'Kevin',
        lastName: 'Davis',
        preferredName: '',
        title: 'Frontend Developer',
      },
      {
        email: 'lucy.williams@thework.com',
        firstName: 'Lucy',
        lastName: 'Williams',
        preferredName: 'Lu',
        title: 'Full-stack Developer',
      },
      {
        email: 'michael.moore@thework.com',
        firstName: 'Michael',
        lastName: 'Moore',
        preferredName: 'Mike',
        title: 'Android Developer',
      },
      {
        email: 'natalie.walker@thework.com',
        firstName: 'Natalie',
        lastName: 'Walker',
        preferredName: 'Nat',
        title: 'iOS Developer',
      },
      {
        email: 'oliver.hall@thework.com',
        firstName: 'Oliver',
        lastName: 'Hall',
        preferredName: 'Ollie',
        title: 'Mobile Developer',
      },
    ],
  })

  const skills = await prisma.skill.createMany({
    data: [
      {
        name: 'HTML',
        description: '',
      },
      {
        name: 'CSS',
        description: '',
      },
      {
        name: 'JavaScript',
        description: '',
      },
      {
        name: 'Node.js',
        description: '',
      },
      {
        name: 'TypeScript',
        description: '',
      },
      {
        name: 'Python',
        description: '',
      },
      {
        name: 'C#',
        description: '',
      },
      {
        name: 'Java',
        description: '',
      },
      {
        name: 'Electron',
        description: '',
      },
      {
        name: 'Flutter',
        description: '',
      },
      {
        name: 'React',
        description: '',
      },
      {
        name: 'ReactNative',
        description: '',
      },
      {
        name: 'Next.js',
        description: '',
      },
      {
        name: 'Kotlin',
        description: '',
      },
      {
        name: 'Swift',
        description: '',
      },
    ],
  })

  const fields = await prisma.field.createMany({
    data: [
      { name: 'Web Frontend' },
      { name: 'Backend' },
      { name: 'Mobile' },
      { name: 'Desktop' },
      { name: 'Design' },
      { name: 'Testing' },
    ],
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
