import { prisma } from '@/server/prisma'

async function main() {
  const alice = await prisma.person.upsert({
    where: { email: 'alice@stmg.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Green',
      preferredName: '',
      title: 'Frontend Developer',
    },
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
