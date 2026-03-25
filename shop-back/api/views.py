from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Product, Category
import json

@require_http_methods(["GET"])
def products_list(request):
    """List of all Products"""
    products = Product.objects.filter(is_active=True)  # Only return active products
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            }
        })
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def product_detail(request, id):
    """Get one Product by ID"""
    try:
        product = Product.objects.get(id=id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            }
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

@require_http_methods(["GET"])
def categories_list(request):
    """List of all Categories"""
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def category_detail(request, id):
    """Get one Category by ID"""
    try:
        category = Category.objects.get(id=id)
        data = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

@require_http_methods(["GET"])
def category_products(request, id):
    """List of Products by Category"""
    try:
        category = Category.objects.get(id=id)
        products = category.products.filter(is_active=True)
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category': {
                    'id': product.category.id,
                    'name': product.category.name
                }
            })
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)