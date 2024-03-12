export interface Product {
  id: string;
  packsNumber: number;
  packageType: 'Компрессия' | 'Некомпрессия';
  isArchived: boolean;
  createdAt: string;
  description?: string;
}
