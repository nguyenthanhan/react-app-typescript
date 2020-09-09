import { apiClient } from './vinovaEngineAPI';

export function getAllBlogsInCategory(
  token: string,
  categoryId: number,
  page: number,
  perPage: number,
  search: string
) {
  return new apiClient(token).get('blog/blog-search', {
    categories: categoryId,
    page,
    per_page: perPage,
    search: search === '' ? undefined : search,
  });
}
