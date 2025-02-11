import 'package:http/http.dart' as http;
// import 'dart:convert';

class ApiService {
  static const String baseUrl = 'http://localhost:3000';

  Future<void> createUser({
    required String name,
    required String email,
    required String phone,
    String? imagePath,
  }) async {
    var request = http.MultipartRequest('POST', Uri.parse('$baseUrl/users'));
    
    request.fields['name'] = name;
    request.fields['email'] = email;
    request.fields['phone'] = phone;
    
    if (imagePath != null) {
      request.files.add(await http.MultipartFile.fromPath('image', imagePath));
    }
    
    var response = await request.send();
    if (response.statusCode != 201) {
      throw Exception('Failed to create user');
    }
  }
} 