if (Test-Path .\..\MisterJ936) {
     if (Test-Path .\..\MisterJ936\dist) {
          Write-Host "Deleting Dist in MisterJ936..."
          Remove-Item ".\..\MisterJ936\dist" -Recurse -Force
     }
     Write-Host "Copyint Dist to MisterJ936...."
     Copy-Item -Path ".\dist" -Destination ".\..\MisterJ936" -Recurse -Force
} else {
     Write-Warning "Directory MisterJ936 Doesnt Exist"
}