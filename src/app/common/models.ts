export interface PeriodicElement {
  name: number;
  description: string;
  triggerName: number;
  interimTriggerName: string;
  effectiveDeadlineInfo: string;
}

export interface JsonItems  {
  id: number;
  name: string;
  status: string;
  modifyBy: string;
  modifyDate: string;
  description: string;
  triggerdateLbman: boolean;
  triggerdateSvcscat: string;
  triggerdateItem: boolean;
  isinterimtrigger: boolean;
  constraintLbman: boolean;
  constraintSvcscat: string;
  constraintItem: boolean;
  purma: boolean;
  nntm: boolean;
  pdbtm: boolean;
  dsart: boolean;
  trigger: number;
  interimtrigger: number;
  constraint: number;
  lbmanEffectivedeadlineinfo: number;
  lbmanProcbasisref: number;
  editable: boolean;
}
