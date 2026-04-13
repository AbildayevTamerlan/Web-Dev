from django.urls import path
from . import views

# 1 - FBV
# urlpatterns = [
#     path('products/', views.products_list),
#     path('products/<int:product_id>/', views.product_detail),
#
#     path('products/active/', views.active_products),
#     path('products/expensive/', views.expensive_products)
# ]

# 2 CBV, Mixins
# urlpatterns = [
#     path('products/', views.ProductListAPIView.as_view()),
#     path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
#
#     path('products/active/', views.ActiveProductListAPIView.as_view()),
#     path('products/expensive/', views.ExpensiveProductListAPIView.as_view())
# ]

# 4 - Generics
urlpatterns = [
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),

    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),

    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),

    path('products/active/', views.ActiveProductListAPIView.as_view()),
    path('products/expensive/', views.ExpensiveProductListAPIView.as_view()),
]