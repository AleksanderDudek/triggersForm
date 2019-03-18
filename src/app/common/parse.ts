import { JsonItems } from './models';

export default function parseObject (data, tableItems)  {
  const temp = data.json();
  tableItems = temp.map(el => {
    const parsedEl = el as JsonItems;
    const holder = {
      name: parsedEl.name.toString(),
      description: parsedEl.description,
      triggerName: !!parsedEl.id && parsedEl.id.toString(),
      interimTriggerName: !!parsedEl.interimtrigger && parsedEl.interimtrigger.toString(),
      effectiveDeadlineInfo: !!parsedEl.lbmanEffectivedeadlineinfo && parsedEl.lbmanEffectivedeadlineinfo.toString(),
      empty : ''
    };
    return holder;
  });
  return tableItems;
}

