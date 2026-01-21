
import csv
from collections import Counter

file_path = r"c:\Users\juanc\OneDrive\Escritorio\Antigravity\Informe anual Andesmar\Data SemRush\VENTA PLATAFORMA 10 OCT NOV DIC 25.csv"

def analyze_routes():
    route_counts = Counter()
    
    try:
        with open(file_path, mode='r', encoding='utf-8', errors='replace') as csvfile:
            # Check if file has header or not. Based on preview: "PTF - PLATAFORMA 10,01/10/2025,..."
            # It seems like data starts immediately or maybe one header line.
            # We'll treat it as standard CSV.
            reader = csv.reader(csvfile)
            
            for row in reader:
                if len(row) < 5:
                    continue
                
                # Assuming index 3 is Origin and 4 is Destination based on previous cat output
                # Output: PTF..., Date, ID, RETIRO..., SAN LUIS, Price
                # Index: 0, 1, 2, 3, 4, 5
                
                origin = row[3].strip()
                destination = row[4].strip()
                
                # Basic validation to avoid header row if it exists
                if "RETIRO" in origin or "MENDOZA" in origin or "CORDOBA" in origin or "SAN LUIS" in origin:
                     route = f"{origin} -> {destination}"
                     route_counts[route] += 1
                elif len(origin) > 3 and len(destination) > 3: # Catch other valid cities
                     route = f"{origin} -> {destination}"
                     route_counts[route] += 1

        print("Top 10 Routes by Sales Count:")
        for route, count in route_counts.most_common(10):
            print(f"{route}: {count}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_routes()
