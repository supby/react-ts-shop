import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newDep = await prisma.createDepartment({
      name: 'testDep1',
      description: 'testDep1 description'
  })
  console.log(`${newDep.name} (ID: ${newDep.id})`)

  // Read all users from the database and print them to the console
  const allDeps = await prisma.departments()
  console.log(allDeps)
}

main().catch(e => console.error(e))