# Implementing CLIP in PyTorch

CLIP (Contrastive Language-Image Pre-training) by OpenAI is a powerful model that connects vision and language. Here's how to implement its core functionality:

## Image Encoder

```python
class ImageEncoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.backbone = vision_models.resnet50(pretrained=True)
        self.projection = nn.Linear(2048, 512)
    
    def forward(self, x):
        features = self.backbone(x)
        return self.projection(features)
```

## Text Encoder

The text encoder processes text using a transformer architecture.
