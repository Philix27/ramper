import { EpicRpc, epicSchema } from "./epic";
import { ProjectRpc, projectsSchema } from "./projects";
import { StoriesRpc, storySchema } from "./story";
import { TaskRpc, taskSchema } from "./task";
import { WorkspaceRpc, workspaceSchema } from "./workspace";

export const AppRpc = {
  workspace: new WorkspaceRpc(),
  epic: new EpicRpc(),
  project: new ProjectRpc(),
  task: new TaskRpc(),
  story: new StoriesRpc(),
};

export const ApiSchema = {
  workspace: workspaceSchema,
  epic: epicSchema,
  story: storySchema,
  project: projectsSchema,
  task: taskSchema,
};

export * from "./epic";
export * from "./projects";
export * from "./story";
export * from "./task";
export * from "./workspace";
