export enum STACK_COMPONENT_TYPE {
  ORCHESTRATOR = 'orchestrator',
  ARTIFACT_STORE = 'artifact_store',
  CONTAINER_REGISTRY = 'container_registry',
  DATA_VALIDATOR = 'data_validator',
  EXPERIMENT_TRACKER = 'experiment_tracker',
  MODEL_DEPLOYER = 'model_deployer',
  STEP_OPERATOR = 'step_operator',
  ALERTER = 'alerter',
  IMAGE_BUILDER = 'image_builder',
  ANNOTATOR = 'annotator',
  MODEL_REGISTRY = 'model_registry',
  FEATURE_STORE = 'feature_store',
  SECRETS_MANAGER = 'secrets_manager'
}

export enum STACK_COMPONENT_FLAVOR {
  KUBEFLOW = 'kubeflow'
}

export interface StackComponent {
  id: string
  created: string
  updated: string
  user: string
  project: string
  is_shared: boolean
  name: string
  type: STACK_COMPONENT_TYPE
  flavor: STACK_COMPONENT_FLAVOR
  configuration: Record<string, unknown>
}
