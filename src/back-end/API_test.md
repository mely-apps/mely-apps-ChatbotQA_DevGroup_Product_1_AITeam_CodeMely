1. Test câu hỏi có sẵn: 
```bash
curl --location 'http://localhost:30002/v1/chat/completions' \
--header 'Content-Type: application/json' \
--data '{
       "messages": [
         {"role": "user", "content": "Trình bày những quy định cấm trong vùng đặc quyền kinh tế, thềm lục địa và quyền truy đuổi tàu thuyền nước ngoài theo luật biển Việt Nam?"}
       ],
       "model": "gpt-4o"
     }'
```

Tầm: 500ms 

{
    "id": "chatcmpl-bd3d4c3c2ca5b11947d8756f",
    "object": "chat.completion",
    "created": 20764663,
    "model": "gpt-4o",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Quy định cấm trong vùng đặc quyền kinh tế và thềm lục địa Việt Nam\n - Khi thực hiện quyền tự do hàng hải, tự do hàng không trong vùng đặc quyền kinh tế và thềm lục địa Việt Nam, tổ chức, cá nhân không được tiến hành các hoạt động sau đây:\n + Đe dọa chủ quyền, quốc phòng, an ninh của Việt Nam;\n + Khai thác trái phép tài nguyên sinh vật, đánh bắt hải sản trái phép;\n \n + Khai thác trái phép dòng chảy, năng lượng gió và tài nguyên phi sinh vật khác;\n + Xây dựng, lắp đặt, sử dụng trái phép các thiết bị, công trình nhân tạo;\n + Khoan, đào trái phép;\n + Tiến hành nghiên cứu khoa học trái phép;\n + Gây ô nhiễm môi trường biển;\n + Cướp biển, cướp có vũ trang;\n + Các hoạt động bất hợp pháp khác theo quy định của pháp luật Việt Nam và pháp luật quốc tế.\n Quyền truy đuổi tàu thuyền nước ngoài\n - Lực lượng tuần tra, kiểm soát trên biển có quyền truy đuổi tàu thuyền nước ngoài vi phạm các quy định của pháp luật Việt Nam nếu các tàu thuyền này đang ở trong nội thủy, lãnh hải và vùng tiếp giáp lãnh hải Việt Nam.\n - Quyền truy đuổi được tiến hành sau khi lực lượng tuần tra, kiểm soát trên biển đã phát tín hiệu yêu cầu tàu thuyền vi phạm hay có dấu hiệu vi phạm pháp luật dưng lại để tiến hành kiểm tra nhưng tàu thuyền đó không chấp hành. Việc truy đuổi có thể được tiếp tục ở ngoài ranh giới của lãnh hải hay vùng tiếp giáp lãnh hải Viêt Nam nếu được tiến hành liên tục, không ngắt quãng.\n - Quyền truy đuổi cũng được áp dụng đối với hành vi vi phạm quyền chủ quyền, quyền tài phán quốc gia của Việt Nam, vi phạm trong phạm vi vành đai an toàn và trên các đảo nhân tạo, thiết bị, công trình trên biển trong vùng đặc quyền kinh tế và thềm lục địa Việt Nam.\n - Việc truy đuổi của các lực lượng tuần tra, kiểm soát Việt Nam chấm dứt khi tàu thuyền bị truy đuổi đi vào lãnh hải của quốc gia khác.\n\n(Nguồn: backend_vector_database/dataset/LegalRAG.xlsx)"
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 0,
        "completion_tokens": 0,
        "total_tokens": 0
    }
}


2. Test câu hỏi cần suy luận, tầm 8-12s: 
```
curl --location 'http://localhost:30002/v1/chat/completions' \
--header 'Content-Type: application/json' \
--data '{
       "messages": [
         {"role": "user", "content": "Quy tắc giao thông đường bộ là gì?"}
       ],
       "model": "gpt-4o"
     }'
```

Output: 
```
{
    "id": "chatcmpl-90e44fc938acb1150d92bd06",
    "object": "chat.completion",
    "created": 20764607,
    "model": "gpt-4o-2024-08-06",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Quy tắc giao thông đường bộ là tập hợp các quy định và hướng dẫn nhằm điều chỉnh hành vi của người tham gia giao thông trên đường bộ. Những quy tắc này được thiết lập để đảm bảo an toàn và trật tự giao thông, giảm thiểu tai nạn và tối ưu hóa lưu thông trên đường.\n\nQuy tắc giao thông đường bộ thường bao gồm các quy định về:\n\n1. Các biển báo và tín hiệu giao thông: Hướng dẫn người tham gia giao thông về các biển báo hiệu, đèn tín hiệu và các chỉ dẫn trên đường.\n\n2. Quyền ưu tiên: Quy định về quyền ưu tiên của các phương tiện giao thông tại các giao lộ, ngã ba, ngã tư và các tình huống khác trên đường.\n\n3. Tốc độ và khoảng cách: Hướng dẫn về tốc độ tối đa cho phép và khoảng cách an toàn giữa các phương tiện.\n\n4. Làn đường và hướng đi: Quy định về việc di chuyển trong các làn đường và hướng đi đúng theo quy định của từng loại đường.\n\n5. Đỗ xe: Các quy định về vị trí và cách thức đỗ xe hợp pháp.\n\n6. Hành vi của người điều khiển phương tiện: Quy định về việc sử dụng điện thoại, uống rượu bia khi lái xe và các hành vi khác ảnh hưởng đến an toàn giao thông.\n\n7. Quy định dành cho người đi bộ và người đi xe đạp: Hướng dẫn về cách thức di chuyển an toàn cho người đi bộ và người đi xe đạp.\n\nQuy tắc giao thông đường bộ được quy định bởi các cơ quan chức năng của từng quốc gia hoặc vùng lãnh thổ và thường được điều chỉnh theo thời gian để phù hợp với tình hình giao thông thực tế."
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "completion_tokens": 370,
        "prompt_tokens": 2791,
        "total_tokens": 3161,
        "completion_tokens_details": {
            "accepted_prediction_tokens": 0,
            "audio_tokens": 0,
            "reasoning_tokens": 0,
            "rejected_prediction_tokens": 0
        },
        "prompt_tokens_details": {
            "audio_tokens": 0,
            "cached_tokens": 2688
        }
    }
}
```

3. 

curl -X 'POST' \
  'http://localhost:30002/v1/chat/completions' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "messages": [
    {
      "role": "user",
      "content": "Bạn có bài viết về AI không"
    }
  ],
  "model": "gpt-3.5-turbo",
  "temperature": 0.7,
  "stream": false
}'

Output: 

{
  "id": "chatcmpl-ecd49e3b93cde640a0bec598",
  "object": "chat.completion",
  "created": 22071709,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Dĩ nhiên, dưới đây là một số bài viết về AI mà bạn có thể quan tâm:\n\n1. [Khoa học máy tính và trí tuệ nhân tạo: Sự khác biệt và mối quan hệ](https://www.facebook.com/groups/devoiminhdidauthe/permalink/10095993197137627/): Bài viết này giải thích sự khác biệt giữa Khoa học máy tính và Trí tuệ nhân tạo, cũng như mối quan hệ chặt chẽ giữa hai lĩnh vực này.\n\n2. [Tìm hiểu về các lĩnh vực con trong ngành AI - Phần 2: Machine Learning](https://www.facebook.com/groups/devoiminhdidauthe/permalink/10095993197137627/): Bài viết này giới thiệu về các lĩnh vực con trong Machine Learning, là một phần quan trọng của Trí tuệ nhân tạo.\n\n3. [Confusion Matrix và các chỉ số đánh giá mô hình học máy](https://www.facebook.com/groups/devoiminhdidauthe/permalink/10095993197137627/): Bài viết này giúp bạn hiểu rõ hơn về Confusion Matrix và các chỉ số được sử dụng để đánh giá một mô hình học máy.\n\n4. [Tìm hiểu về thuật toán Navie Bayes](https://www.facebook.com/groups/devoiminhdidauthe/permalink/10095993197137627/): Bài viết này cung cấp kiến thức về thuật toán Navie Bayes và cách nó hoạt động trong việc phân loại dữ liệu.\n\nNếu bạn muốn biết thêm về bất kỳ chủ đề nào khác liên quan đến AI, hãy cho mình biết để mình có thể cung cấp thông tin chi tiết hơn cho bạn."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "completion_tokens": 513,
    "prompt_tokens": 2785,
    "total_tokens": 3298,
    "completion_tokens_details": {
      "accepted_prediction_tokens": 0,
      "audio_tokens": 0,
      "reasoning_tokens": 0,
      "rejected_prediction_tokens": 0
    },
    "prompt_tokens_details": {
      "audio_tokens": 0,
      "cached_tokens": 0
    }
  }
}


4. API Update sau deploy 1.1 

```bash
{
    "id": "chatcmpl-xxx",
    "object": "chat.completion",
    "created": 1234567890,
    "model": "gpt-3.5-turbo",
    "choices": [{
        "index": 0,
        "message": {
            "role": "assistant",
            "content": "Nội dung câu trả lời"
        },
        "finish_reason": "stop"
    }],
    "usage": {...},
    "sources": [
        {
            "score": 0.92,
            "source": "https://example.com/post1",
            "author": "Tác giả 1",
            "date": "2024-03-20"
        },
        {
            "score": 0.85,
            "source": "https://example.com/post2",
            "author": "Tác giả 2",
            "date": "2024-03-19"
        },
        // ... more sources
    ]
}
```


# cách output trả ra hiện tại chuẩn của OpenAI hả, tại sao lại chuẩn thế nhỉ ? 

Đúng rồi, output hiện tại được thiết kế để tương thích với chuẩn OpenAI API. Cụ thể:

1. Cấu trúc response chuẩn OpenAI:
```python
class ChatResponse(BaseModel):
    id: str = Field(default_factory=lambda: f"chatcmpl-{os.urandom(12).hex()}")  # format giống OpenAI
    object: str = "chat.completion"  # giống OpenAI
    created: int = Field(default_factory=lambda: int(asyncio.get_event_loop().time()))
    model: str
    choices: List[Dict[str, Any]]  # format choices giống OpenAI
    usage: Dict[str, Any] = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
    sources: List[Dict[str, Any]] = []  # field mở rộng của chúng ta
```

Lý do tại sao lại thiết kế chuẩn như vậy:

1. **Tính tương thích (Compatibility)**:
   - Client code đã viết cho OpenAI API có thể dễ dàng chuyển sang dùng API của chúng ta
   - Các thư viện hỗ trợ OpenAI có thể làm việc với API của chúng ta mà không cần sửa đổi

2. **Cấu trúc chuẩn (Standard Structure)**:
   - `id`: Định danh unique cho mỗi response
   - `object`: Xác định loại response
   - `choices`: Array chứa các response có thể có
   - `usage`: Thông tin về token usage

3. **Mở rộng linh hoạt (Extensibility)**:
   - Chúng ta thêm field `sources` để chứa metadata của các nguồn tham khảo
   - Vẫn giữ được tính tương thích với OpenAI trong khi bổ sung thêm thông tin

4. **Best Practice**:
   - Follow chuẩn API của một platform lớn giúp đảm bảo tính professional
   - Dễ dàng cho việc maintain và scale trong tương lai
   - Dễ dàng cho việc documentation vì có thể tham chiếu tới docs của OpenAI

Ví dụ response sẽ có dạng:
```json
{
    "id": "chatcmpl-123abc...",
    "object": "chat.completion",
    "created": 1679789017,
    "model": "gpt-3.5-turbo",
    "choices": [{
        "index": 0,
        "message": {
            "role": "assistant",
            "content": "Nội dung trả lời..."
        },
        "finish_reason": "stop"
    }],
    "usage": {
        "prompt_tokens": 0,
        "completion_tokens": 0,
        "total_tokens": 0
    },
    "sources": [
        {
            "score": 0.92,
            "source": "https://example.com/post1",
            "author": "Tác giả 1",
            "date": "2024-03-20"
        }
    ]
}
```

```
{
    "id": "chatcmpl-9a31cca31d93e7823a50779a",
    "object": "chat.completion",
    "created": 22080132,
    "model": "gpt-3.5-turbo-0125",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Dạ, dưới đây là một số tài liệu về trí tuệ nhân tạo mà bạn có thể tham khảo:\n\n1. \"Artificial Intelligence: A Modern Approach\" của Stuart Russell và Peter Norvig - Đây là một trong những sách giáo trình phổ biến về trí tuệ nhân tạo, cung cấp kiến thức cơ bản và nâng cao về AI.\n\n2. \"Deep Learning\" của Ian Goodfellow, Yoshua Bengio và Aaron Courville - Sách này tập trung vào học sâu và mạng nơ-ron sâu, là một phần quan trọng của trí tuệ nhân tạo hiện đại.\n\n3. \"Python Machine Learning\" của Sebastian Raschka và Vahid Mirjalili - Cuốn sách này tập trung vào việc áp dụng machine learning bằng Python, một trong những ngôn ngữ phổ biến nhất trong lĩnh vực AI.\n\nNgoài ra, bạn cũng có thể tìm kiếm các tài liệu trên các trang web chuyên về AI như arXiv, Google Scholar, hoặc các trang web của các trường đại học và viện nghiên cứu uy tín. Chúc bạn tìm được những tài liệu phù hợp và hữu ích!"
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "completion_tokens": 350,
        "prompt_tokens": 510,
        "total_tokens": 860,
        "completion_tokens_details": {
            "accepted_prediction_tokens": 0,
            "audio_tokens": 0,
            "reasoning_tokens": 0,
            "rejected_prediction_tokens": 0
        },
        "prompt_tokens_details": {
            "audio_tokens": 0,
            "cached_tokens": 0
        }
    },
    "sources": [
        {
            "score": 0.64477754,
            "source": "https://www.facebook.com/groups/3059387787464905/posts/9796987047038245",
            "author": "Thanh Thảo",
            "date": "2023-09-02T00:00:00"
        },
        {
            "score": 0.5694277,
            "source": "https://www.facebook.com/groups/3059387787464905/posts/10056032877800326",
            "author": "Xuân Lê",
            "date": "2023-10-10T00:00:00"
        },
        {
            "score": 0.5516298,
            "source": "https://www.facebook.com/groups/3059387787464905/posts/24474122478898126",
            "author": "Minh Trần",
            "date": "2024-01-17T00:00:00"
        },
        {
            "score": 0.551009,
            "source": "https://www.facebook.com/groups/3059387787464905/posts/24699366286373743",
            "author": "Minh Trần",
            "date": "2024-02-19T00:00:00"
        },
        {
            "score": 0.551009,
            "source": "https://www.facebook.com/groups/3059387787464905/posts/24699366286373743",
            "author": "Minh Trần",
            "date": "2024-02-19T00:00:00"
        }
    ]
}
```