
# Create reproducible train, validation, and test splits for AVT.
import json
from pathlib import Path
from sklearn.model_selection import train_test_split
from vessel_seg.data import discover_cases


# Take all the AVT cases
cases = discover_cases(Path("data/raw"))
case_ids = [case.case_id for case in cases]

# Make sure the complete dataset is available
if len(case_ids) != 56:
    raise ValueError(f"Expected 56 cases, found {len(case_ids)}")

# Identify where the case belongs to
cohorts = [Path(case_id).parts[0] for case_id in case_ids]

# First split: 39 training cases and 17 held-out cases
train_ids, remaining_ids = train_test_split(
    case_ids,
    train_size=39,
    test_size=17,
    random_state=42,
    stratify=cohorts
)

# Split the held-out cases into validation and testing
remaining_cohorts = [
    Path(case_id).parts[0] for case_id in remaining_ids
]

val_ids, test_ids = train_test_split(
    remaining_ids,
    train_size=8,
    test_size=9,
    random_state=42,
    stratify=remaining_cohorts
)

# Save the case IDs in JSON format
splits = {
    "seed": 42,
    "train": sorted(train_ids),
    "val": sorted(val_ids),
    "test": sorted(test_ids)
}

# Confirm the splits do not overlap
assert not (set(train_ids) & set(val_ids))
assert not (set(train_ids) & set(test_ids))
assert not (set(val_ids) & set(test_ids))

# Confirm every case appears in exactly one split
assert set(train_ids + val_ids + test_ids) == set(case_ids)

# Create the configs folder if needed
output_path = Path("configs/splits.json")
output_path.parent.mkdir(parents=True, exist_ok=True)

# Save the split assignments
if output_path.exists():
    raise FileExistsError(
        f"{output_path} already exists. Check it before replacing."
    )

with open(output_path, "w") as f:
    json.dump(splits, f, indent=2)

print("Dataset splits created successfully!")
print("Training cases:", len(train_ids))
print("Validation cases:", len(val_ids))
print("Testing cases:", len(test_ids))
