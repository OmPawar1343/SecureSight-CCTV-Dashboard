import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(req, { params }) {
  const id = Number(params.id);
  const incident = await prisma.incident.update({
    where: { id },
    data: { resolved: { set: true } },
  });
  return NextResponse.json(incident);
}
