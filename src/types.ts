export interface Product {
  id: string;
  packsNumber: number;
  packageType: 'компрессия' | 'некомпрессия';
  isArchived: boolean;
  createdAt: string;
  description?: string;
}
