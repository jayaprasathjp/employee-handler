const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.employee.createMany({
        data: [
          {
            id: 5,
            name: 'abeesh',
            dob: new Date('2024-02-15'),
            department: 'Database Administrator',
            position: 'Employee',
            address: 'wwww',
            email: 'jayaprasathjp44@gmail.com',
            phone: '+919894432092',
            image: 'Hari.jpg',
            salary: '087987796',
            city: 'Namakkal',
            state: 'Tamil Nadu'
          },
          {
            id: 6,
            name: 'JAYAPRASATH K',
            dob: new Date('2024-05-22'),
            department: 'Software Architect',
            position: 'Manager',
            address: '2/117, Kunnamalai, Paramathi Velur(Taluk)',
            email: 'jayaprasathjp44@gmail.com',
            phone: '+919894432092',
            image: 'a2.jpg',
            salary: '87978',
            city: 'Namakkal',
            state: 'Tamil Nadu'
          },
          {
            id: 8,
            name: 'JAYAPRASATH K',
            dob: new Date('2024-05-29'),
            department: 'Software Architect',
            position: 'Manager',
            address: '2/117, Kunnamalai, Paramathi Velur(Taluk)',
            email: 'jayaprasathjp44@gmail.com',
            phone: '+919894432092',
            image: 'HRMS - Complete Guide on Managing Your Human Resource.jpeg',
            salary: '987',
            city: 'Namakkal',
            state: 'Tamil Nadu'
          },
          {
            id: 101,
            name: 'Bob Smith',
            dob: new Date('1985-07-21'),
            department: 'IT',
            position: 'Developer',
            address: '456 Elm Street',
            email: 'bob.smith@example.com',
            phone: '234-567-8901',
            image: 'path/to/image2.jpg',
            salary: '60000',
            city: 'San Francisco',
            state: 'CA'
          },
          {
            id: 102,
            name: 'Carol Taylor',
            dob: new Date('1979-12-29'),
            department: 'Marketing',
            position: 'Manager',
            address: '789 Oak Street',
            email: 'carol.taylor@example.com',
            phone: '345-678-9012',
            image: 'path/to/image3.jpg',
            salary: '70000',
            city: 'Chicago',
            state: 'IL'
          },
          {
            id: 103,
            name: 'David Lee',
            dob: new Date('1990-04-04'),
            department: 'Sales',
            position: 'Salesperson',
            address: '101 Pine Street',
            email: 'david.lee@example.com',
            phone: '456-789-0123',
            image: 'path/to/image4.jpg',
            salary: '55000',
            city: 'Boston',
            state: 'MA'
          },
          {
            id: 104,
            name: 'JAYAPRASATH K',
            dob: new Date('2024-05-22'),
            department: 'Software Architect',
            position: 'Employee',
            address: '2/117, Kunnamalai, Paramathi Velur(Taluk)',
            email: 'jayaprasathjp44@gmail.com',
            phone: '+919894432092',
            image: '927621BIT006.jpg',
            salary: '54645',
            city: 'Namakkal',
            state: 'Tamil Nadu'
          },
        ],
      });
    const data = [
        {id:100, name: "Alice Johnson", dob: new Date(1980, 4, 15), department: "Finance", position: "Accountant", address: "123 Maple Street", email: "alice.johnson@example.com", phone: "123-456-7890", image: "path/to/image1.jpg", salary: "50000", city: "New York", state: "NY" },
        {id:101, name: "Bob Smith", dob: new Date(1985, 6, 22), department: "IT", position: "Developer", address: "456 Elm Street", email: "bob.smith@example.com", phone: "234-567-8901", image: "path/to/image2.jpg", salary: "60000", city: "San Francisco", state: "CA" },
        {id:102, name: "Carol Taylor", dob: new Date(1979, 11, 30), department: "Marketing", position: "Manager", address: "789 Oak Street", email: "carol.taylor@example.com", phone: "345-678-9012", image: "path/to/image3.jpg", salary: "70000", city: "Chicago", state: "IL" },
        {id:103, name: "David Lee", dob: new Date(1990, 3, 5), department: "Sales", position: "Salesperson", address: "101 Pine Street", email: "david.lee@example.com", phone: "456-789-0123", image: "path/to/image4.jpg", salary: "55000", city: "Boston", state: "MA" },
        {id:104, name: "Ella Brown", dob: new Date(1983, 7, 17), department: "HR", position: "Recruiter", address: "234 Birch Street", email: "ella.brown@example.com", phone: "567-890-1234", image: "path/to/image5.jpg", salary: "52000", city: "Miami", state: "FL" },
        {id:105, name: "Frank Wright", dob: new Date(1987, 1, 9), department: "Operations", position: "Operations Manager", address: "567 Cedar Street", email: "frank.wright@example.com", phone: "678-901-2345", image: "path/to/image6.jpg", salary: "62000", city: "Seattle", state: "WA" },
        {id:106, name: "Grace Hall", dob: new Date(1975, 5, 20), department: "Legal", position: "Lawyer", address: "890 Spruce Street", email: "grace.hall@example.com", phone: "789-012-3456", image: "path/to/image7.jpg", salary: "80000", city: "Denver", state: "CO" },
        {id:107, name: "Henry Foster", dob: new Date(1992, 8, 24), department: "Research", position: "Scientist", address: "321 Walnut Street", email: "henry.foster@example.com", phone: "890-123-4567", image: "path/to/image8.jpg", salary: "63000", city: "Portland", state: "OR" },
        {id:108, name: "Ivy Green", dob: new Date(1981, 10, 10), department: "Product", position: "Product Manager", address: "654 Aspen Street", email: "ivy.green@example.com", phone: "901-234-5678", image: "path/to/image9.jpg", salary: "67000", city: "Austin", state: "TX" },
        {id:109, name: "Jack Black", dob: new Date(1978, 9, 19), department: "Design", position: "Designer", address: "987 Maple Avenue", email: "jack.black@example.com", phone: "012-345-6789", image: "path/to/image10.jpg", salary: "58000", city: "Las Vegas", state: "NV" }
    ];

    for (const item of data) {
        await prisma.exemployee.create({
            data: item
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
