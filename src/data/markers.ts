import type { MarkerItem } from '../stores/useMapStore'

export const FLOOR_ORDER = ['1F_top', '1F_right', 'B1_right', '1F_left', 'B1_left', 'B2', 'B3'] as const

export interface SubCategory {
  id: string
  name: string
  icon: string
}

export const CATEGORIES: Array<{ id: string; name: string; icon: string; subCategories: SubCategory[] }> = [
  {
    id: 'bullet',
    name: '弹药',
    icon: '1_bullet.webp',
    subCategories: [
      { id: 'acid bomb', name: '酸弹', icon: 'acid bomb.webp' },
      { id: 'fire bomb', name: '火弹', icon: 'fire bomb.webp' },
      { id: 'magnum bullet', name: '马格南子弹', icon: 'magnum bullet.webp' },
      { id: 'pistol bullets', name: '手枪子弹', icon: 'pistol bullets.webp' },
      { id: 'shotgun bullet', name: '霰弹', icon: 'shotgun bullet.webp' },
      { id: 'submachine gun bullets', name: '冲锋枪子弹', icon: 'submachine gun bullets.webp' },
      { id: 'gunpowder', name: '火药', icon: 'gunpoweder.webp' },
      { id: 'gunpowder big', name: '火药（大）', icon: 'gunpowder（big）.webp' },
      { id: 'advanced gunpowder', name: '高级火药', icon: 'advanced gunpowder.webp' },
    ],
  },
  {
    id: 'checkpoint',
    name: '存档点',
    icon: '1_Checkpoint.webp',
    subCategories: [
      { id: 'lnk ribbon', name: '墨带', icon: 'lnk ribbon.webp' },
      { id: 'typewriter', name: '打字机', icon: 'typewriter.webp' },
    ],
  },
  {
    id: 'collection',
    name: '收集品',
    icon: '1_collection.webp',
    subCategories: [
      { id: 'Fanny pack', name: '腰包', icon: 'Fanny pack.webp' },
      { id: 'document', name: '文件', icon: 'document.webp' },
      { id: 'locked container', name: '锁闭容器', icon: 'locked container.webp' },
      { id: 'map', name: '地图', icon: 'map.webp' },
      { id: 'plank', name: '木板', icon: 'plank.webp' },
      { id: 'raccoon toy', name: '浣熊玩具', icon: 'raccoon toy.webp' },
    ],
  },
  {
    id: 'door',
    name: '门',
    icon: '1_door.webp',
    subCategories: [
      { id: 'keygate', name: '钥匙门', icon: 'keygate.webp' },
    ],
  },
  {
    id: 'enemy',
    name: '敌人',
    icon: '1_enemy.webp',
    subCategories: [
      { id: 'enemy', name: '普通敌人', icon: 'enemy.webp' },
      { id: 'mutated enemy', name: '变异敌人', icon: 'mutated enemy.webp' },
      { id: 'licker', name: '舔食者', icon: 'Licker.webp' },
      { id: 'tyrant', name: '暴君', icon: 'Tyrant.webp' },
      { id: 'plant enemy', name: '植物人', icon: 'plant_enemy.webp' },
    ],
  },
  {
    id: 'medicine',
    name: '药品',
    icon: '1_medicine.webp',
    subCategories: [
      { id: 'blue grass', name: '蓝草', icon: 'blue grass.webp' },
      { id: 'first aid spray', name: '急救喷雾', icon: 'first aid spray.webp' },
      { id: 'green grass', name: '绿草', icon: 'green grass.webp' },
      { id: 'red grass', name: '红草', icon: 'red grass.webp' },
    ],
  },
  {
    id: 'projectile',
    name: '投掷物',
    icon: '1_projectile.webp',
    subCategories: [
      { id: 'dagger', name: '飞刀', icon: 'dagger.webp' },
      { id: 'flashbang', name: '闪光弹', icon: 'flashbang.webp' },
      { id: 'grenade', name: '手雷', icon: 'grenade.webp' },
    ],
  },
  {
    id: 'puzzle item',
    name: '谜题道具',
    icon: '1_Puzzle Item.webp',
    subCategories: [
      { id: 'important props', name: '重要道具', icon: 'important props.webp' },
      { id: 'key', name: '钥匙', icon: 'key.webp' },
    ],
  },
  {
    id: 'tip',
    name: '提示',
    icon: '1_tips.webp',
    subCategories: [
      { id: 'guidance tips', name: '引导提示', icon: 'guidance tips.webp' },
      { id: 'mechanisms', name: '机关', icon: 'mechanisms.webp' },
      { id: 'street sign', name: '路标', icon: 'street sign.webp' },
    ],
  },
  {
    id: 'weapon',
    name: '武器',
    icon: '1_weapon.webp',
    subCategories: [
      { id: 'Weapon accessories', name: '武器配件', icon: 'Weapon accessories.webp' },
      { id: 'Weapon', name: '武器', icon: 'Weapon.webp' },
    ],
  },
]

// 示例标点数据 (坐标为相对位置 0-1)
export const SAMPLE_MARKERS: MarkerItem[] = [
  // B1 楼层 - 弹药
  {
    id: 'bullet_1',
    name: '手枪弹药',
    category: 'bullet',
    character: 'both',
    mode: 'both',
    coordinates: [0.3, 0.4],
  },
  {
    id: 'bullet_2',
    name: '霰弹枪弹药',
    category: 'bullet',
    character: 'leon',
    mode: 'both',
    coordinates: [0.5, 0.3],
  },
  // B1 楼层 - 存档点
  {
    id: 'checkpoint_1',
    name: '打字机',
    category: 'checkpoint',
    character: 'both',
    mode: 'both',
    coordinates: [0.4, 0.5],
  },
  // B1 楼层 - 门
  {
    id: 'door_1',
    name: '铁门',
    category: 'door',
    character: 'both',
    mode: 'both',
    coordinates: [0.6, 0.4],
  },
  // B1 楼层 - 敌人
  {
    id: 'enemy_1',
    name: 'G第一形态',
    category: 'enemy',
    character: 'both',
    mode: 'expert',
    coordinates: [0.7, 0.3],
  },
  // B2 楼层 - 药品
  {
    id: 'medicine_1',
    name: '红草',
    category: 'medicine',
    character: 'both',
    mode: 'both',
    coordinates: [0.35, 0.45],
  },
  {
    id: 'medicine_2',
    name: '蓝草',
    category: 'medicine',
    character: 'both',
    mode: 'both',
    coordinates: [0.45, 0.55],
  },
  // B2 楼层 - 武器
  {
    id: 'weapon_1',
    name: '霰弹枪',
    category: 'weapon',
    character: 'leon',
    mode: 'normal',
    coordinates: [0.55, 0.4],
  },
  // 1F 楼层 - 收集品
  {
    id: 'collection_1',
    name: '文件',
    category: 'collection',
    character: 'both',
    mode: 'both',
    coordinates: [0.4, 0.35],
  },
  // 2F 楼层 - 投掷物
  {
    id: 'projectile_1',
    name: '闪光弹',
    category: 'projectile',
    character: 'both',
    mode: 'both',
    coordinates: [0.5, 0.45],
  },
]