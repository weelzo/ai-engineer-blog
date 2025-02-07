# Understanding Transformer Architecture

The transformer architecture has revolutionized natural language processing and continues to be the foundation of modern language models. Let's explore its key components:

## Self-Attention Mechanism

The core innovation of transformers is the self-attention mechanism. Here's a simplified implementation:

```python
def self_attention(query, key, value, mask=None):
    scores = torch.matmul(query, key.transpose(-2, -1))
    scores = scores / math.sqrt(query.size(-1))
    
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    
    attention_weights = torch.softmax(scores, dim=-1)
    return torch.matmul(attention_weights, value)
```

## Multi-Head Attention

Multiple attention heads allow the model to focus on different aspects of the input simultaneously.
