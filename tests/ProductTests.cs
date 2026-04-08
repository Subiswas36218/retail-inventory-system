using Xunit;
using backend.Services;
using backend.Models;

public class ProductTests
{
    [Fact]
    public void ShouldThrow_WhenNameEmpty()
    {
        var service = new ProductService();

        Assert.Throws<ArgumentException>(() =>
            service.Add(new Product { Name = "", Quantity = 1 })
        );
    }

    [Fact]
    public void ShouldDeleteProduct()
    {
        var service = new ProductService();

        var product = service.Add(new Product { Name = "Milk", Quantity = 2 });
        service.Delete(product.Id);

        Assert.Empty(service.GetAll());
    }
}