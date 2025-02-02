export const cleanJsonResponse = (response: string) => {
    let cleaned = response.replace(/```json\n|\n```/g, '');
    cleaned = cleaned.split('**Disclaimer')[0];
    return cleaned.trim();
  }
  
  export const transformScholarshipData = (rawData: any[]) => {
    return rawData.map(item => ({
      name: item["Name of the scholarship"] || item.name,
      amount: item["Amount offered"] || item.amount,
      deadline: item["Application deadline"] || item.deadline,
      description: item["Brief description"] || item.description,
      link: item["Link to the official application portal or source"] || item.link
    }));
  }
  
  export const validateUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.toString();
    } catch {
      return url.startsWith('http') ? url : `https://${url}`;
    }
  }