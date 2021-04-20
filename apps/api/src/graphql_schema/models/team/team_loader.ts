import { Team } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

const memberships: Loader<Team, {}, Context> = async (queries, { prisma }) => {
  return [
    await prisma.teamMembership.findMany({
      where: {
        team: {
          id: { in: queries.map((query) => query.obj.id) },
        },
      },
    }),
  ];
};

const projects: Loader<Team, {}, Context> = async (queries, { prisma }) => {
  return [
    await prisma.project.findMany({
      where: {
        team: {
          id: { in: queries.map((query) => query.obj.id) },
        },
      },
    }),
  ];
};

export const TeamLoader = {
  memberships,
  projects,
};
