using backend.Models;

namespace backend.Services;

public class ProductService
{
    private readonly List<Product> _products = new();

    public List<Product> GetAll() => _products;

    public Product Add(Product product)
    {
        if (string.IsNullOrWhiteSpace(product.Name))
            throw new ArgumentException("Product name required");

        product.Id = _products.Count + 1;
        _products.Add(product);
        return product;
    }

    public void Delete(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            throw new Exception("Product not found");

        _products.Remove(product);
    }
}