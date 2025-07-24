const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create cameras
  await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'Main Hall' },
      { name: 'Vault', location: 'Back Room' },
      { name: 'Entrance', location: 'Front Door' },
    ],
    skipDuplicates: true,
  });

  // Get camera IDs
  const cameraList = await prisma.camera.findMany();

  // Create incidents
  const incidentsData = [
    // Shop Floor A
    { cameraId: cameraList[0].id, type: 'Unauthorised Access', tsStart: new Date('2025-07-23T01:00:00Z'), tsEnd: new Date('2025-07-23T01:05:00Z'), thumbnailUrl: '/images/incident1.jpg', resolved: false },
    { cameraId: cameraList[0].id, type: 'Gun Threat', tsStart: new Date('2025-07-23T02:00:00Z'), tsEnd: new Date('2025-07-23T02:10:00Z'), thumbnailUrl: '/images/incident2.jpg', resolved: false },
    { cameraId: cameraList[0].id, type: 'Face Recognised', tsStart: new Date('2025-07-23T03:00:00Z'), tsEnd: new Date('2025-07-23T03:02:00Z'), thumbnailUrl: '/images/incident3.jpg', resolved: true },
    // Vault
    { cameraId: cameraList[1].id, type: 'Unauthorised Access', tsStart: new Date('2025-07-23T04:00:00Z'), tsEnd: new Date('2025-07-23T04:05:00Z'), thumbnailUrl: '/images/incident4.jpg', resolved: false },
    { cameraId: cameraList[1].id, type: 'Gun Threat', tsStart: new Date('2025-07-23T05:00:00Z'), tsEnd: new Date('2025-07-23T05:10:00Z'), thumbnailUrl: '/images/incident5.jpg', resolved: true },
    { cameraId: cameraList[1].id, type: 'Face Recognised', tsStart: new Date('2025-07-23T06:00:00Z'), tsEnd: new Date('2025-07-23T06:02:00Z'), thumbnailUrl: '/images/incident6.jpg', resolved: false },
    // Entrance
    { cameraId: cameraList[2].id, type: 'Unauthorised Access', tsStart: new Date('2025-07-23T07:00:00Z'), tsEnd: new Date('2025-07-23T07:05:00Z'), thumbnailUrl: '/images/incident7.jpg', resolved: false },
    { cameraId: cameraList[2].id, type: 'Gun Threat', tsStart: new Date('2025-07-23T08:00:00Z'), tsEnd: new Date('2025-07-23T08:10:00Z'), thumbnailUrl: '/images/incident8.jpg', resolved: false },
    { cameraId: cameraList[2].id, type: 'Face Recognised', tsStart: new Date('2025-07-23T09:00:00Z'), tsEnd: new Date('2025-07-23T09:02:00Z'), thumbnailUrl: '/images/incident9.jpg', resolved: true },
    // More incidents
    { cameraId: cameraList[0].id, type: 'Gun Threat', tsStart: new Date('2025-07-23T10:00:00Z'), tsEnd: new Date('2025-07-23T10:10:00Z'), thumbnailUrl: '/images/incident10.jpg', resolved: false },
    { cameraId: cameraList[1].id, type: 'Face Recognised', tsStart: new Date('2025-07-23T11:00:00Z'), tsEnd: new Date('2025-07-23T11:02:00Z'), thumbnailUrl: '/images/incident11.jpg', resolved: false },
    { cameraId: cameraList[2].id, type: 'Unauthorised Access', tsStart: new Date('2025-07-23T12:00:00Z'), tsEnd: new Date('2025-07-23T12:05:00Z'), thumbnailUrl: '/images/incident12.jpg', resolved: true },
  ];

  await prisma.incident.createMany({ data: incidentsData, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
