from database import SessionLocal, engine
from models import Base, Medicine, Batch
from datetime import date

Base.metadata.create_all(bind=engine)

db = SessionLocal()

# Clear old data
db.query(Batch).delete()
db.query(Medicine).delete()

# Medicines
medicine1 = Medicine(
    name="Amoxicillin 500mg",
    generic_name="Amoxicillin Trihydrate",
    category="Antibiotic",
    reorder_level=100
)

medicine2 = Medicine(
    name="Paracetamol 650mg",
    generic_name="Acetaminophen",
    category="Analgesic",
    reorder_level=200
)

medicine3 = Medicine(
    name="Metformin 500mg",
    generic_name="Metformin HCl",
    category="Antidiabetic",
    reorder_level=150
)

medicine4 = Medicine(
    name="Atorvastatin 10mg",
    generic_name="Atorvastatin Calcium",
    category="Statin",
    reorder_level=120
)

medicine5 = Medicine(
    name="Azithromycin 250mg",
    generic_name="Azithromycin Dihydrate",
    category="Antibiotic",
    reorder_level=80
)

medicine6 = Medicine(
    name="Omeprazole 20mg",
    generic_name="Omeprazole Magnesium",
    category="PPI",
    reorder_level=100
)

db.add_all([
    medicine1,
    medicine2,
    medicine3,
    medicine4,
    medicine5,
    medicine6
])

db.commit()

db.refresh(medicine1)
db.refresh(medicine2)
db.refresh(medicine3)
db.refresh(medicine4)
db.refresh(medicine5)
db.refresh(medicine6)

# Batches
batches = [
    Batch(
        medicine_id=medicine1.id,
        batch_number="AMX-24-001",
        expiry_date=date(2026, 4, 6),
        current_quantity=80,
        price=12.5
    ),

    Batch(
        medicine_id=medicine1.id,
        batch_number="AMX-25-002",
        expiry_date=date(2027, 1, 15),
        current_quantity=450,
        price=11
    ),

    Batch(
        medicine_id=medicine2.id,
        batch_number="PCT-24-001",
        expiry_date=date(2026, 3, 20),
        current_quantity=0,
        price=3.5
    ),

    Batch(
        medicine_id=medicine2.id,
        batch_number="PCT-25-001",
        expiry_date=date(2027, 5, 1),
        current_quantity=620,
        price=3.75
    ),

    Batch(
        medicine_id=medicine3.id,
        batch_number="MET-24-001",
        expiry_date=date(2026, 5, 30),
        current_quantity=110,
        price=8
    ),

    Batch(
        medicine_id=medicine3.id,
        batch_number="MET-25-001",
        expiry_date=date(2027, 8, 10),
        current_quantity=200,
        price=8.25
    ),

    Batch(
        medicine_id=medicine4.id,
        batch_number="ATV-25-001",
        expiry_date=date(2026, 6, 15),
        current_quantity=190,
        price=22
    ),

    Batch(
        medicine_id=medicine5.id,
        batch_number="AZI-25-001",
        expiry_date=date(2026, 6, 1),
        current_quantity=170,
        price=34
    ),

    Batch(
        medicine_id=medicine6.id,
        batch_number="OMP-25-001",
        expiry_date=date(2027, 3, 20),
        current_quantity=390,
        price=15.5
    ),
]

db.add_all(batches)

db.commit()

db.close()

print("Dummy data inserted successfully!")