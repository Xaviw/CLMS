export enum LabStatus {
  open,
  close,
  repair,
}

// 申请类型
export const ApplicationType = [
  { text: '机房申请', value: 0, byDefault: true },
  { text: '采购申请', value: 1, byDefault: true },
  { text: '报修申请', value: 2, byDefault: true },
];

// 申请状态
export const ApplicationStatus: {
  text: string;
  value: number;
  byDefault: boolean;
  color: 'blue' | 'red' | 'green' | 'gray';
}[] = [
  { text: '待审核', value: 0, byDefault: true, color: 'gray' },
  { text: '已通过', value: 1, byDefault: true, color: 'blue' },
  { text: '未通过', value: 2, byDefault: true, color: 'gray' },
  { text: '已完成', value: 3, byDefault: true, color: 'green' },
  { text: '未完成', value: 4, byDefault: true, color: 'red' },
  { text: '已取消', value: 5, byDefault: true, color: 'gray' },
];
