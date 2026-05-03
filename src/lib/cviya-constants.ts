export const THEME_COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'Slate', value: '#475569' },
  { name: 'Gray', value: '#6b7280' },
  { name: 'Zinc', value: '#71717a' },
  { name: 'Neutral', value: '#737373' },
  { name: 'Stone', value: '#78716c' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Fuchsia', value: '#d946ef' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Sky', value: '#0ea5e9' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Lime', value: '#84cc16' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Yellow', value: '#eab308' },
];

export type ExperienceLayoutId =
  | 'default'
  | 'timeline'
  | 'card'
  | 'traditional'
  | 'journey'
  | 'modern'
  | 'compact'
  | 'stepladder'
  | 'creative';

export const EXPERIENCE_LAYOUTS: { id: ExperienceLayoutId; label: string }[] = [
  { id: 'default', label: 'افتراضي' },
  { id: 'timeline', label: 'خط زمني' },
  { id: 'card', label: 'بطاقات' },
  { id: 'traditional', label: 'تقليدي' },
  { id: 'journey', label: 'رحلة' },
  { id: 'modern', label: 'عصري' },
  { id: 'compact', label: 'مضغوط' },
  { id: 'stepladder', label: 'سلّمي' },
  { id: 'creative', label: 'إبداعي' },
];

export const TEMPLATE_INFO = [
  {
    id: 'classic',
    nameAr: 'كلاسيكي',
    descriptionAr: 'عمود واحد نظيف، مثالي للقطاعات التقليدية',
    tag: 'Single',
  },
  {
    id: 'modern',
    nameAr: 'حديث',
    descriptionAr: 'شريط جانبي ملون، مثالي للتقنية والإبداع',
    tag: 'Two-Col',
  },
  {
    id: 'elegant',
    nameAr: 'أنيق',
    descriptionAr: 'رأس أنيق مع تخطيط احترافي',
    tag: 'Header',
  },
  {
    id: 'minimal',
    nameAr: 'بسيط',
    descriptionAr: 'تصميم بسيط ونظيف للمصممين وأدوار UX',
    tag: 'Minimal',
  },
  {
    id: 'bold',
    nameAr: 'جريء',
    descriptionAr: 'شريط جانبي داكن، مثالي للتسويق والمبيعات',
    tag: 'Two-Col',
  },
  {
    id: 'creative',
    nameAr: 'إبداعي',
    descriptionAr: 'تصميم إبداعي فريد للمصممين والفنانين',
    tag: 'Creative',
  },
  {
    id: 'timeline',
    nameAr: 'خط زمني',
    descriptionAr: 'تخطيط خط زمني لإبراز تطور المسار المهني',
    tag: 'Timeline',
  },
];

export const FONTS = [
  { name: 'font-sans', label: 'Sans', descriptionAr: 'خط حديث بدون حواف' },
  { name: 'font-serif', label: 'Serif', descriptionAr: 'خط كلاسيكي بحواف' },
  { name: 'font-mono', label: 'Mono', descriptionAr: 'خط ثابت العرض' },
];

export const LANGUAGE_LEVELS = ['لغة أم', 'متقدم', 'متوسط', 'مبتدئ', 'Native', 'Fluent', 'Advanced', 'Professional', 'Intermediate', 'Beginner'];
